 // Three.js 3D Visualization
        let scene, camera, renderer, cube;
        let targetRotationX = 0;
        let targetRotationY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let autoRotate = true;
        
        function init() {
            // Create scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xf0f0f0);
            
            // Create camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(document.getElementById('product-canvas').offsetWidth, document.getElementById('product-canvas').offsetHeight);
            document.getElementById('product-canvas').appendChild(renderer.domElement);
            
            // Add lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);
            
            // Create cube as placeholder for product
            createProductGeometry('#F5F5DC'); // Default color
            
            // Handle window resize
            window.addEventListener('resize', onWindowResize, false);
            
            // Add event listeners for interaction
            const canvas = renderer.domElement;
            canvas.addEventListener('mousedown', onDocumentMouseDown, false);
            canvas.addEventListener('touchstart', onDocumentTouchStart, false);
            
            // Start animation loop
            animate();
        }
        
        function createProductGeometry(color) {
            // Show loader
            document.querySelector('.loader').classList.add('active');
            
            // Remove old cube if exists
            if (cube) {
                scene.remove(cube);
            }
            
            // Create more realistic tile geometry (ligeiramente mais fino)
            const geometry = new THREE.BoxGeometry(3, 3, 0.1);
            
            // Create texture for the piso
            const textureSize = 512;
            const canvas = document.createElement('canvas');
            canvas.width = textureSize;
            canvas.height = textureSize;
            const ctx = canvas.getContext('2d');
            
            // Fill with base color
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, textureSize, textureSize);
            
            // Add subtle grain/noise texture
            ctx.globalAlpha = 0.05;
            for (let i = 0; i < textureSize; i += 4) {
                for (let j = 0; j < textureSize; j += 4) {
                    const value = Math.floor(Math.random() * 255);
                    ctx.fillStyle = `rgb(${value},${value},${value})`;
                    ctx.fillRect(i, j, 4, 4);
                }
            }
            
            // Add some marble-like veins if the color is light enough
            const colorObj = new THREE.Color(color);
            const brightness = (colorObj.r + colorObj.g + colorObj.b) / 3;
            
            if (brightness > 0.5) {
                ctx.globalAlpha = 0.1;
                ctx.strokeStyle = '#888';
                ctx.lineWidth = 2;
                
                // Draw random veins
                for (let i = 0; i < 5; i++) {
                    const startX = Math.random() * textureSize;
                    const startY = Math.random() * textureSize;
                    
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    
                    // Create natural-looking curves
                    for (let j = 0; j < 3; j++) {
                        const cp1x = startX + Math.random() * 200 - 100;
                        const cp1y = startY + Math.random() * 200 - 100;
                        const cp2x = startX + Math.random() * 200 - 100;
                        const cp2y = startY + Math.random() * 200 - 100;
                        const endX = startX + Math.random() * 200 - 100;
                        const endY = startY + Math.random() * 200 - 100;
                        
                        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
                    }
                    
                    ctx.stroke();
                }
            }
            
            // Add subtle edge separation (grout lines)
            ctx.globalAlpha = 0.2;
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 6;
            ctx.strokeRect(0, 0, textureSize, textureSize);
            
            // Reset alpha
            ctx.globalAlpha = 1.0;
            
            // Create texture from canvas
            const texture = new THREE.CanvasTexture(canvas);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(2, 2);
            
            // Create normal map for surface details
            const normalMap = new THREE.CanvasTexture(createNormalMap(textureSize));
            normalMap.wrapS = THREE.RepeatWrapping;
            normalMap.wrapT = THREE.RepeatWrapping;
            normalMap.repeat.set(2, 2);
            
            // Create roughness map for realistic light reflection
            const roughnessMap = new THREE.CanvasTexture(createRoughnessMap(textureSize));
            roughnessMap.wrapS = THREE.RepeatWrapping;
            roughnessMap.wrapT = THREE.RepeatWrapping;
            roughnessMap.repeat.set(2, 2);
            
            // Create material with the texture
            const material = new THREE.MeshStandardMaterial({ 
                map: texture,
                normalMap: normalMap,
                roughnessMap: roughnessMap,
                roughness: 0.3,
                metalness: 0.1,
                bumpScale: 0.02
            });
            
            // Create tile and add to scene - sem os elementos de borda chanfrada
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            
            // Simulate loading delay for more realistic feel
            setTimeout(() => {
                document.querySelector('.loader').classList.remove('active');
            }, 800);
        }
        
        // Create normal map for surface details
        function createNormalMap(size) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            // Fill with neutral normal (128, 128, 255)
            ctx.fillStyle = 'rgb(128, 128, 255)';
            ctx.fillRect(0, 0, size, size);
            
            // Add subtle surface variations
            for (let i = 0; i < size; i += 2) {
                for (let j = 0; j < size; j += 2) {
                    const r = 128 + Math.floor(Math.random() * 20 - 10);
                    const g = 128 + Math.floor(Math.random() * 20 - 10);
                    ctx.fillStyle = `rgb(${r}, ${g}, 255)`;
                    ctx.fillRect(i, j, 2, 2);
                }
            }
            
            return canvas;
        }
        
        // Create roughness map for varying reflectivity
        function createRoughnessMap(size) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            // Base roughness
            ctx.fillStyle = 'rgb(80, 80, 80)';
            ctx.fillRect(0, 0, size, size);
            
            // Add varying roughness for realism
            for (let i = 0; i < size; i += 4) {
                for (let j = 0; j < size; j += 4) {
                    const value = 80 + Math.floor(Math.random() * 40);
                    ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
                    ctx.fillRect(i, j, 4, 4);
                }
            }
            
            // Add some smoother/shinier areas
            for (let i = 0; i < 10; i++) {
                const x = Math.random() * size;
                const y = Math.random() * size;
                const radius = 10 + Math.random() * 30;
                
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, 'rgb(20, 20, 20)');
                gradient.addColorStop(1, 'rgb(80, 80, 80)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }
            
            return canvas;
        }
        
        // Add beveled edges for more realism
        function addBevelEdges(tileMesh, color) {
            const bevelSize = 0.05;
            const colorObj = new THREE.Color(color);
            const darkerColor = new THREE.Color(
                Math.max(0, colorObj.r - 0.1),
                Math.max(0, colorObj.g - 0.1),
                Math.max(0, colorObj.b - 0.1)
            );
            
            // Create material for bevels
            const bevelMaterial = new THREE.MeshStandardMaterial({
                color: darkerColor,
                roughness: 0.5,
                metalness: 0.1
            });
            
            // Top edge bevels
            const edges = [
                // Front edge
                { pos: [0, 1.5 - bevelSize/2, 0.05], rot: [Math.PI/4, 0, 0], scale: [3, bevelSize, bevelSize] },
                // Back edge
                { pos: [0, -1.5 + bevelSize/2, 0.05], rot: [-Math.PI/4, 0, 0], scale: [3, bevelSize, bevelSize] },
                // Left edge
                { pos: [-1.5 + bevelSize/2, 0, 0.05], rot: [0, 0, -Math.PI/4], scale: [bevelSize, 3, bevelSize] },
                // Right edge
                { pos: [1.5 - bevelSize/2, 0, 0.05], rot: [0, 0, Math.PI/4], scale: [bevelSize, 3, bevelSize] }
            ];
            
            edges.forEach(edge => {
                const bevelGeometry = new THREE.BoxGeometry(1, 1, 1);
                const bevelMesh = new THREE.Mesh(bevelGeometry, bevelMaterial);
                
                bevelMesh.position.set(edge.pos[0], edge.pos[1], edge.pos[2]);
                bevelMesh.rotation.set(edge.rot[0], edge.rot[1], edge.rot[2]);
                bevelMesh.scale.set(edge.scale[0], edge.scale[1], edge.scale[2]);
                
                tileMesh.add(bevelMesh);
            });
        }
        
        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            
            camera.aspect = document.getElementById('product-canvas').offsetWidth / document.getElementById('product-canvas').offsetHeight;
            camera.updateProjectionMatrix();
            
            renderer.setSize(document.getElementById('product-canvas').offsetWidth, document.getElementById('product-canvas').offsetHeight);
        }
        
        function onDocumentMouseDown(event) {
            event.preventDefault();
            
            // Pause auto rotation when user interacts
            autoRotate = false;
            
            document.addEventListener('mousemove', onDocumentMouseMove, false);
            document.addEventListener('mouseup', onDocumentMouseUp, false);
        }
        
        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) * 0.001;
            mouseY = (event.clientY - windowHalfY) * 0.001;
        }
        
        function onDocumentMouseUp() {
            document.removeEventListener('mousemove', onDocumentMouseMove, false);
            document.removeEventListener('mouseup', onDocumentMouseUp, false);
        }
        
        function onDocumentTouchStart(event) {
            if (event.touches.length === 1) {
                event.preventDefault();
                
                autoRotate = false;
                
                mouseX = event.touches[0].pageX - windowHalfX;
                mouseY = event.touches[0].pageY - windowHalfY;
                
                document.addEventListener('touchmove', onDocumentTouchMove, false);
                document.addEventListener('touchend', onDocumentTouchEnd, false);
            }
        }
        
        function onDocumentTouchMove(event) {
            if (event.touches.length === 1) {
                event.preventDefault();
                
                mouseX = event.touches[0].pageX - windowHalfX;
                mouseY = event.touches[0].pageY - windowHalfY;
            }
        }
        
        function onDocumentTouchEnd() {
            document.removeEventListener('touchmove', onDocumentTouchMove, false);
            document.removeEventListener('touchend', onDocumentTouchEnd, false);
        }
        
        function animate() {
            requestAnimationFrame(animate);
            
            if (autoRotate) {
                cube.rotation.y += 0.005;
            } else {
                // Smooth rotation based on mouse/touch movement
                targetRotationY += (mouseX - targetRotationY) * 0.05;
                targetRotationX += (mouseY - targetRotationX) * 0.05;
                
                cube.rotation.y += targetRotationY;
                cube.rotation.x += targetRotationX;
            }
            
            renderer.render(scene, camera);
        }
        
        // Initialize 3D scene
        init();
        
        // Color selection functionality
        document.querySelectorAll('.color-sample').forEach(sample => {
            sample.addEventListener('click', function() {
                // Remove selected class from all samples
                document.querySelectorAll('.color-sample').forEach(s => {
                    s.classList.remove('selected');
                });
                
                // Add selected class to clicked sample
                this.classList.add('selected');
                
                // Update 3D model color
                const colorHex = this.getAttribute('data-color');
                const colorName = this.getAttribute('data-name');
                
                // Update color name in product info
                document.getElementById('selected-color-name').textContent = colorName;
                
                // Update 3D model
                createProductGeometry(colorHex);
            });
        });
        
        // View controls
        document.getElementById('rotate-left').addEventListener('click', function() {
            autoRotate = false;
            cube.rotation.y -= 0.3;
        });
        
        document.getElementById('rotate-right').addEventListener('click', function() {
            autoRotate = false;
            cube.rotation.y += 0.3;
        });
        
        document.getElementById('zoom-in').addEventListener('click', function() {
            if (camera.position.z > 2) {
                camera.position.z -= 0.5;
            }
        });
        
        document.getElementById('zoom-out').addEventListener('click', function() {
            if (camera.position.z < 10) {
                camera.position.z += 0.5;
            }
        });
        
        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter material cards
                document.querySelectorAll('.material-card').forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-type') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
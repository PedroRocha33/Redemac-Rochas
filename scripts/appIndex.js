 // Simple Slider for Hero Section
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            
            function showSlide(n) {
                slides[currentSlide].classList.remove('active');
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            }
            
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
            
            // Change slide every 5 seconds
            setInterval(nextSlide, 5000);
            
            // Mobile Menu Toggle
            document.addEventListener('DOMContentLoaded', function() {
                // Add additional JavaScript functionality here
                
                // Example: Smooth scrolling for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            window.scrollTo({
                                top: target.offsetTop - 100,
                                behavior: 'smooth'
                            });
                        }
                    });
                });
            });

             // Funcionalidade opcional para os pontos de navegação
        const dots = document.querySelectorAll('.nav-dot');
        let currentDot = 0;

        setInterval(() => {
            dots[currentDot].classList.remove('active');
            currentDot = (currentDot + 1) % dots.length;
            dots[currentDot].classList.add('active');
        }, 5000);

        // Pausar animação ao hover
        const track = document.querySelector('.carousel-track');
        const container = document.querySelector('.carousel-container');

        container.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });

        container.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
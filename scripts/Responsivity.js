 // Função para alternar o menu mobile
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger-menu');
            
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Função para definir navegação ativa no desktop
        function setActiveNav(element, section) {
            // Remove active de todos os links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Adiciona active ao link clicado
            element.classList.add('active');
            
            // Fecha o menu mobile se estiver aberto
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger-menu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }

        // Função para definir navegação ativa no mobile
        function setActiveMobileNav(element, section) {
            // Remove active de todos os links mobile
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Adiciona active ao link clicado
            element.classList.add('active');
            
            // Sincroniza com o menu desktop
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Encontra o link correspondente no menu desktop
            const desktopLink = document.querySelector(`.nav-link[onclick*="${section}"]`);
            if (desktopLink) {
                desktopLink.classList.add('active');
            }
            
            // Fecha o menu mobile
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger-menu');
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }

        // Fecha o menu quando clicar fora dele
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger-menu');
            const header = document.querySelector('.header');
            
            if (!header.contains(event.target) && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Fecha o menu ao redimensionar a tela para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                const mobileMenu = document.getElementById('mobileMenu');
                const hamburger = document.querySelector('.hamburger-menu');
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
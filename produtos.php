<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - Redemac Rochas</title>
    <style>
        :root {
            --primary-color: #e63946;
            --secondary-color: #1d3557;
            --light-color: #f1faee;
            --accent-color: #a8dadc;
            --dark-color: #457b9d;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            color: #333;
        }
        
        header {
            background-color: var(--secondary-color);
            color: white;
            padding: 1rem 2rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }
        
        .logo span {
            color: var(--primary-color);
            margin-left: 0.5rem;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 1.5rem;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        nav ul li a:hover {
            color: var(--accent-color);
        }
        
        nav ul li a.active {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .page-title {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--secondary-color);
            font-size: 2.5rem;
            position: relative;
        }
        
        .page-title::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--primary-color);
        }
        
        .page-description {
            text-align: center;
            margin-bottom: 3rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            color: #666;
            line-height: 1.6;
        }
        
        .categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .category-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
        }
        
        .category-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .category-image {
            height: 200px;
            background-size: cover;
            background-position: center;
            position: relative;
        }
        
        .category-image::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
        }
        
        .category-content {
            padding: 1.5rem;
        }
        
        .category-title {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            color: var(--secondary-color);
            display: flex;
            align-items: center;
        }
        
        .category-title i {
            margin-right: 0.5rem;
            color: var(--primary-color);
        }
        
        .category-description {
            color: #666;
            margin-bottom: 1rem;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .btn {
            display: inline-block;
            padding: 0.6rem 1.2rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
            text-decoration: none;
        }
        
        .btn:hover {
            background-color: #d12c39;
        }
        
        .category-items {
            margin-top: 0.8rem;
            font-size: 0.9rem;
            color: #777;
        }
        
        .category-items span {
            font-weight: 600;
            color: var(--dark-color);
        }
        
        footer {
            background-color: var(--secondary-color);
            color: white;
            padding: 2rem;
            margin-top: 3rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .footer-section {
            flex: 1;
            min-width: 250px;
            margin-bottom: 1.5rem;
        }
        
        .footer-title {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--accent-color);
        }
        
        .footer-section p, .footer-section a {
            color: #ddd;
            margin-bottom: 0.5rem;
            display: block;
            text-decoration: none;
        }
        
        .footer-section a:hover {
            color: var(--primary-color);
        }
        
        .bottom-footer {
            text-align: center;
            padding-top: 1.5rem;
            margin-top: 1.5rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: #aaa;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .categories {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1.5rem;
            }
            
            .category-image {
                height: 150px;
            }
            
            .category-title {
                font-size: 1.2rem;
            }
            
            .footer-content {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                REDEMAC<span>ROCHAS</span>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#" class="active">Produtos</a></li>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="container">
        <h1 class="page-title">Nossos Produtos</h1>
        <p class="page-description">
            Na Redemac Rochas, oferecemos uma ampla variedade de produtos para atender todas as suas necessidades de construção e decoração. Explore nossas categorias e encontre exatamente o que você precisa para seu projeto.
        </p>
        
        <div class="categories">
            <a href="#materials" class="category-card">
                <div class="category-image" style="background-image: url('/api/placeholder/400/300')"></div>
                <div class="category-content">
                    <h2 class="category-title"><i>🏗️</i> Materiais de Construção</h2>
                    <p class="category-description">Tudo o que você precisa para construir ou reformar sua casa. Desde fundação até acabamento.</p>
                    <p class="category-items"><span>+500</span> produtos disponíveis</p>
                    <button class="btn">Ver Produtos</button>
                </div>
            </a>
            
            <a href="#finishing" class="category-card">
                <div class="category-image" style="background-image: url('/api/placeholder/400/300')"></div>
                <div class="category-content">
                    <h2 class="category-title"><i>✨</i> Acabamento</h2>
                    <p class="category-description">Dê o toque final ao seu projeto com nossa linha completa de produtos de acabamento de alta qualidade.</p>
                    <p class="category-items"><span>+300</span> produtos disponíveis</p>
                    <button class="btn">Ver Produtos</button>
                </div>
            </a>
            
            <a href="#bazaar" class="category-card">
                <div class="category-image" style="background-image: url('/api/placeholder/400/300')"></div>
                <div class="category-content">
                    <h2 class="category-title"><i>🏠</i> Bazar</h2>
                    <p class="category-description">Utensílios, decoração e tudo mais para deixar sua casa mais bonita e funcional.</p>
                    <p class="category-items"><span>+200</span> produtos disponíveis</p>
                    <button class="btn">Ver Produtos</button>
                </div>
            </a>
            
            <a href="#pool" class="category-card">
                <div class="category-image" style="background-image: url('/api/placeholder/400/300')"></div>
                <div class="category-content">
                    <h2 class="category-title"><i>🏊</i> Produtos para Piscina</h2>
                    <p class="category-description">Tudo para a instalação, manutenção e diversão na sua piscina. Produtos de qualidade para água cristalina.</p>
                    <p class="category-items"><span>+150</span> produtos disponíveis</p>
                    <button class="btn">Ver Produtos</button>
                </div>
            </a>
        </div>
    </div>
    
    <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h3>Sobre a Redemac Rochas</h3>
                        <p>Somos uma loja de materiais de construção comprometida com a qualidade dos produtos e excelência no atendimento. Há mais de 15 anos no mercado, ajudamos a construir sonhos.</p>
                        <div class="footer-socials">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Projetos</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Categorias</h3>
                        <ul>
                            <li><a href="#">Materiais Básicos</a></li>
                            <li><a href="#">Acabamentos</a></li>
                            <li><a href="#">Elétrica</a></li>
                            <li><a href="#">Hidráulica</a></li>
                            <li><a href="#">Ferramentas</a></li>
                            <li><a href="#">Tintas</a></li>
                            <li><a href="#">Piscinas</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Contato</h3>
                        <ul class="footer-contact">
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <p>Rua da barca, 519</p>
                                    <p>Barreto - Triunfo/RS</p>
                                </div>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>
                                <div>
                                    <p>(51) 3654-7164</p>
                                </div>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <div>
                                    <p>contato@redemacrochas.com.br</p>
                                    <p>vendas@redemacrochas.com.br</p>
                                </div>
                            </li>
                            <li>
                                <i class="fas fa-clock"></i>
                                <div>
                                    <p>Segunda a Sexta: 8h às 18h</p>
                                    <p>Sábado: 8h às 12h</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                <div class="container">
                    <p>&copy; 2025 Redemac Rochas. Todos os direitos reservados. Desenvolvido por <a href="#">Pedro Rocha</a></p>
                </div>
            </div>
        </footer>
    <script>
        // Código para tratamento de cliques nas categorias
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('href').substring(1);
                alert(`Você selecionou a categoria: ${category}\nEm uma implementação real, você seria redirecionado para a página de produtos desta categoria.`);
                // Aqui você adicionaria o código para navegar para a página de produtos específica
            });
        });
    </script>
</body>
</html>
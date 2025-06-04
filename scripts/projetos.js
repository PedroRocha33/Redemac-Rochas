// Projects data
const projects = [
    // Projetos Residenciais
    {
        id: 'res-001',
        name: 'Residencial Vila Verde',
        type: 'Residencial',
        location: 'São Paulo, SP',
        year: 2023,
        status: 'Concluído',
        image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
        description: 'Condomínio residencial com apartamentos de 2 e 3 dormitórios, área de lazer completa e acabamento de primeira qualidade.',
        features: ['120 unidades', 'Piscina', 'Academia', 'Playground', 'Salão de festas', 'Portaria 24h'],
        area: '15.000m²'
    },
    {
        id: 'res-002',
        name: 'Condomínio Harmonia',
        type: 'Residencial',
        location: 'Rio de Janeiro, RJ',
        year: 2024,
        status: 'Em Andamento',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
        description: 'Residencial de alto padrão com vista para o mar, tecnologia sustentável e design moderno.',
        features: ['80 unidades', 'Vista para o mar', 'Sistema solar', 'Spa', 'Coworking', 'Pet place'],
        area: '12.500m²'
    },
    {
        id: 'res-003',
        name: 'Torres do Sol',
        type: 'Residencial',
        location: 'Brasília, DF',
        year: 2025,
        status: 'Planejamento',
        image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop',
        description: 'Complexo residencial com três torres, conceito de cidade inteligente e infraestrutura completa.',
        features: ['300 unidades', 'Smart building', 'Centro comercial', 'Escola', 'Hospital', 'Transporte interno'],
        area: '45.000m²'
    },

    // Projetos Comerciais
    {
        id: 'com-001',
        name: 'Shopping Center Norte',
        type: 'Comercial',
        location: 'São Paulo, SP',
        year: 2022,
        status: 'Concluído',
        image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop',
        description: 'Centro comercial moderno com 200 lojas, praça de alimentação e cinema multiplex.',
        features: ['200 lojas', 'Cinema', 'Praça de alimentação', 'Estacionamento para 2.000 veículos', 'Arquitetura sustentável'],
        area: '80.000m²'
    },
    {
        id: 'com-002',
        name: 'Complexo Empresarial Alpha',
        type: 'Comercial',
        location: 'Belo Horizonte, MG',
        year: 2024,
        status: 'Em Andamento',
        image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
        description: 'Centro empresarial com escritórios modernos, auditórios e espaços de coworking.',
        features: ['50 salas comerciais', 'Auditório', 'Coworking', 'Restaurante', 'Heliponto', 'Tecnologia 5G'],
        area: '25.000m²'
    },

    // Projetos Habitacionais
    {
        id: 'hab-001',
        name: 'Programa Minha Casa',
        type: 'Habitacional',
        location: 'Fortaleza, CE',
        year: 2023,
        status: 'Concluído',
        image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop',
        description: 'Conjunto habitacional popular com 500 casas, infraestrutura completa e áreas de lazer.',
        features: ['500 casas', 'Escola municipal', 'Posto de saúde', 'Área de lazer', 'Quadra esportiva', 'Transporte público'],
        area: '35.000m²'
    },
    {
        id: 'hab-002',
        name: 'Residencial Esperança',
        type: 'Habitacional',
        location: 'Salvador, BA',
        year: 2024,
        status: 'Em Andamento',
        image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop',
        description: 'Projeto de habitação social com apartamentos de 2 dormitórios e infraestrutura urbana completa.',
        features: ['400 apartamentos', 'Creche', 'Centro comunitário', 'Área verde', 'Ciclovia', 'Coleta seletiva'],
        area: '28.000m²'
    },

    // Projetos Corporativos
    {
        id: 'corp-001',
        name: 'Torre Redemac Corporate',
        type: 'Corporativo',
        location: 'São Paulo, SP',
        year: 2023,
        status: 'Concluído',
        image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop',
        description: 'Sede corporativa da Redemac com 30 andares, tecnologia de ponta e certificação LEED.',
        features: ['30 andares', 'Certificação LEED', 'Auditório 500 lugares', 'Centro de treinamento', 'Restaurante executivo', 'Academia'],
        area: '45.000m²'
    },
    {
        id: 'corp-002',
        name: 'Campus Tecnológico Rio',
        type: 'Corporativo',
        location: 'Rio de Janeiro, RJ',
        year: 2024,
        status: 'Em Andamento',
        image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
        description: 'Campus corporativo para empresas de tecnologia com laboratórios e espaços de inovação.',
        features: ['Laboratórios', 'Espaços de inovação', 'Data center', 'Incubadora', 'Centro de convenções', 'Hotel executivo'],
        area: '60.000m²'
    }
];

// State variables
let selectedType = 'Todos';
let searchTerm = '';
let filteredProjects = [...projects];

// DOM elements
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projectsGrid');
const projectsTitle = document.getElementById('projectsTitle');
const projectsCount = document.getElementById('projectsCount');
const noResults = document.getElementById('noResults');

// Helper functions
function getStatusColor(status) {
    switch (status) {
        case 'Concluído':
            return 'status-completed';
        case 'Em Andamento':
            return 'status-ongoing';
        case 'Planejamento':
            return 'status-planning';
        default:
            return 'status-completed';
    }
}

function createProjectCard(project) {
    const featuresHTML = project.features.slice(0, 3).map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    const moreFeatures = project.features.length > 3 ? 
        `<span class="feature-tag">+${project.features.length - 3} mais</span>` : '';

    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
                <div class="status-badge ${getStatusColor(project.status)}">
                    ${project.status}
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-meta">
                    <span class="project-type">${project.type}</span>
                    ${project.area ? `
                        <span class="project-area">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg>
                            ${project.area}
                        </span>
                    ` : ''}
                </div>
                
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-details">
                    <div class="project-detail">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${project.location}
                    </div>
                    <div class="project-detail">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                        ${project.year}
                    </div>
                </div>
                
                <div class="project-features">
                    <h4 class="features-title">Características:</h4>
                    <div class="features-list">
                        ${featuresHTML}
                        ${moreFeatures}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function filterProjects() {
    filteredProjects = projects.filter(project => {
        const matchesType = selectedType === 'Todos' || project.type === selectedType;
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             project.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });
    
    renderProjects();
}

function renderProjects() {
    // Update title and count
    projectsTitle.textContent = selectedType === 'Todos' ? 'Todos os Projetos' : `Projetos ${selectedType}s`;
    projectsCount.textContent = `${filteredProjects.length} projeto${filteredProjects.length !== 1 ? 's' : ''} encontrado${filteredProjects.length !== 1 ? 's' : ''}`;
    
    // Show/hide no results
    if (filteredProjects.length === 0) {
        projectsGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        projectsGrid.style.display = 'grid';
        noResults.style.display = 'none';
        
        // Render project cards
        projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    }
}

function toggleMobileMenu() {
    // This would implement mobile menu functionality
    // For now, it's just a placeholder
    console.log('Mobile menu toggle');
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    filterProjects();
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update selected type
        selectedType = button.getAttribute('data-type');
        
        // Filter projects
        filterProjects();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
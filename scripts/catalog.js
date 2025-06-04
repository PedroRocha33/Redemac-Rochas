
// Color catalog data
const colors = [
    // Neutro Frio
    { id: 1, name: 'Horizonte', code: '#E5E7EA', family: 'Neutro Frio', category: 'Cores prontas', finish: 'Acetinado', environments: ['Sala', 'Quarto'] },
    { id: 2, name: 'Superfície Lunar', code: '#D4D6DA', family: 'Neutro Frio', category: 'Cores prontas', finish: 'Fosco', environments: ['Escritório'] },
    { id: 3, name: 'Sais de Lavanda', code: '#C8CAD0', family: 'Neutro Frio', category: 'Cores prontas', finish: 'Acetinado', environments: ['Banheiro'] },
    { id: 4, name: 'Prata Aviador', code: '#B8BAC2', family: 'Neutro Frio', category: 'Cores prontas', finish: 'Semibrilho', environments: ['Cozinha'] },
    { id: 5, name: 'Cinza Alpino', code: '#A8AAB4', family: 'Neutro Frio', category: 'Cores prontas', finish: 'Fosco', environments: ['Sala'] },
    { id: 6, name: 'Verde Iônico', code: '#9A9CA6', family: 'Neutro Frio', category: 'Cores prontas', finish: 'Acetinado', environments: ['Quarto'] },
    
    { id: 7, name: 'Castanha-do-Pará', code: '#D4B896', family: 'Neutro Quente', category: 'Cores prontas', finish: 'Fosco', environments: ['Sala'] },
    { id: 8, name: 'Azul Pálido', code: '#B5C4D6', family: 'Azul', category: 'Cores prontas', finish: 'Acetinado', environments: ['Quarto'] },
    { id: 9, name: 'Azul Pálido', code: '#A5B4C6', family: 'Azul', category: 'Cores prontas', finish: 'Semibrilho', environments: ['Banheiro'] },
    { id: 10, name: 'Cinza Tecnológico', code: '#95A4B6', family: 'Cinza', category: 'Cores prontas', finish: 'Fosco', environments: ['Escritório'] },
    { id: 11, name: 'Véu', code: '#E8E8E8', family: 'Branco', category: 'Cores prontas', finish: 'Acetinado', environments: ['Sala', 'Quarto'] },
    { id: 12, name: 'Azul Surreal', code: '#8594A6', family: 'Azul', category: 'Cores prontas', finish: 'Fosco', environments: ['Sala'] },

    { id: 13, name: 'Azul Echarpe', code: '#7584A0', family: 'Azul', category: 'Cores prontas', finish: 'Acetinado', environments: ['Quarto'] },
    { id: 14, name: 'Dia de Chuva', code: '#6F7E98', family: 'Cinza', category: 'Cores prontas', finish: 'Fosco', environments: ['Escritório'] },
    { id: 15, name: 'Estilo Elegante', code: '#5F6E88', family: 'Azul', category: 'Cores prontas', finish: 'Semibrilho', environments: ['Sala'] },
    { id: 16, name: 'Fórmula Cinza', code: '#4F5E78', family: 'Cinza', category: 'Cores prontas', finish: 'Fosco', environments: ['Escritório'] },
    { id: 17, name: 'Cinza Fumaça', code: '#3F4E68', family: 'Cinza', category: 'Cores prontas', finish: 'Acetinado', environments: ['Sala'] },
    { id: 18, name: 'Topo de Torre', code: '#2F3E58', family: 'Azul', category: 'Cores prontas', finish: 'Fosco', environments: ['Quarto'] },

    // Cores do leque (mais variadas)
    { id: 19, name: 'Vermelho Coral', code: '#FF6B6B', family: 'Vermelho', category: 'Cores do leque', finish: 'Brilhante', environments: ['Sala'] },
    { id: 20, name: 'Laranja Vibrante', code: '#FF8E53', family: 'Laranja', category: 'Cores do leque', finish: 'Acetinado', environments: ['Cozinha'] },
    { id: 21, name: 'Amarelo Sol', code: '#FFD93D', family: 'Amarelo', category: 'Cores do leque', finish: 'Semibrilho', environments: ['Cozinha'] },
    { id: 22, name: 'Verde Primavera', code: '#6BCF7F', family: 'Verde', category: 'Cores do leque', finish: 'Fosco', environments: ['Quarto'] },
    { id: 23, name: 'Azul Oceano', code: '#4ECDC4', family: 'Azul', category: 'Cores do leque', finish: 'Acetinado', environments: ['Banheiro'] },
    { id: 24, name: 'Roxo Místico', code: '#9B59B6', family: 'Roxo', category: 'Cores do leque', finish: 'Fosco', environments: ['Quarto'] },
];

const colorFamilies = ['Neutro Frio', 'Neutro Quente', 'Azul', 'Verde', 'Vermelho', 'Amarelo', 'Laranja', 'Roxo', 'Cinza', 'Branco'];
const environments = ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Escritório', 'Área Externa'];
const surfaces = ['Parede', 'Teto', 'Madeira', 'Metal', 'Alvenaria'];
const finishes = ['Fosco', 'Acetinado', 'Semibrilho', 'Brilhante'];

// State
let state = {
    viewMode: 'grid',
    searchTerm: '',
    selectedFilters: {
        environment: '',
        surface: '',
        finish: '',
        colorFamily: ''
    },
    activeTab: 'ready-colors'
};

// Color family color map
const colorMap = {
    'Neutro Frio': '#E5E7EA',
    'Vermelho': '#FF6B6B',
    'Laranja': '#FF8E53',
    'Amarelo': '#FFD93D',
    'Verde': '#6BCF7F',
    'Azul': '#4ECDC4',
    'Roxo': '#9B59B6',
    'Cinza': '#95A4B6',
    'Neutro Quente': '#D4B896',
    'Branco': '#FFFFFF'
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeColorPalette();
    initializeFilters();
    initializeEventListeners();
    updateDisplay();
});

function initializeColorPalette() {
    const paletteContainer = document.getElementById('colorPalette');
    
    colorFamilies.slice(0, 10).forEach(family => {
        const button = document.createElement('button');
        button.className = 'color-btn';
        button.style.backgroundColor = colorMap[family];
        button.title = family;
        button.onclick = () => toggleColorFamily(family);
        paletteContainer.appendChild(button);
    });
    
    const checkDiv = document.createElement('div');
    checkDiv.className = 'color-palette-check';
    checkDiv.innerHTML = '✓';
    paletteContainer.appendChild(checkDiv);
}

function initializeFilters() {
    // Environment filters
    const environmentContainer = document.getElementById('environmentFilters');
    environments.forEach(env => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        label.innerHTML = `
            <input type="checkbox" class="filter-checkbox" onchange="toggleFilter('environment', '${env}')">
            <span class="filter-option-label">${env}</span>
        `;
        environmentContainer.appendChild(label);
    });
    
    // Surface filters
    const surfaceContainer = document.getElementById('surfaceFilters');
    surfaces.forEach(surface => {
        const label = document.createElement('label');
        label.className = 'filter-option';
        label.innerHTML = `
            <input type="checkbox" class="filter-checkbox" onchange="toggleFilter('surface', '${surface}')">
            <span class="filter-option-label">${surface}</span>
        `;
        surfaceContainer.appendChild(label);
    });
    
    // Finish filters
    const finishContainer = document.getElementById('finishFilters');
    finishes.forEach(finish => {
        const button = document.createElement('button');
        button.className = 'finish-btn';
        button.textContent = finish;
        button.onclick = () => toggleFilter('finish', finish);
        finishContainer.appendChild(button);
    });
}

function initializeEventListeners() {
    // Search input
    document.getElementById('searchInput').addEventListener('input', function(e) {
        state.searchTerm = e.target.value;
        updateDisplay();
    });
    
    // Tab triggers
    document.querySelectorAll('.tab-trigger').forEach(trigger => {
        trigger.addEventListener('click', function() {
            const tab = this.dataset.tab;
            setActiveTab(tab);
        });
    });
    
    // View mode buttons
    document.getElementById('gridViewBtn').addEventListener('click', () => setViewMode('grid'));
    document.getElementById('listViewBtn').addEventListener('click', () => setViewMode('list'));
    
    // Clear filters button
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
}

function toggleColorFamily(family) {
    const currentFamily = state.selectedFilters.colorFamily;
    state.selectedFilters.colorFamily = currentFamily === family ? '' : family;
    updateColorPaletteDisplay();
    updateDisplay();
}

function toggleFilter(filterType, value) {
    const currentValue = state.selectedFilters[filterType];
    state.selectedFilters[filterType] = currentValue === value ? '' : value;
    updateFilterDisplay();
    updateDisplay();
}

function setActiveTab(tab) {
    state.activeTab = tab;
    
    // Update tab triggers
    document.querySelectorAll('.tab-trigger').forEach(trigger => {
        trigger.classList.toggle('active', trigger.dataset.tab === tab);
    });
    
    updateDisplay();
}

function setViewMode(mode) {
    state.viewMode = mode;
    
    // Update view buttons
    document.getElementById('gridViewBtn').classList.toggle('active', mode === 'grid');
    document.getElementById('listViewBtn').classList.toggle('active', mode === 'list');
    
    // Update grid class
    const grid = document.getElementById('colorsGrid');
    grid.classList.toggle('list-view', mode === 'list');
    
    updateDisplay();
}

function clearAllFilters() {
    state.selectedFilters = {
        environment: '',
        surface: '',
        finish: '',
        colorFamily: ''
    };
    
    // Clear checkboxes
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Clear finish buttons
    document.querySelectorAll('.finish-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    updateColorPaletteDisplay();
    updateFilterDisplay();
    updateDisplay();
}

function updateColorPaletteDisplay() {
    document.querySelectorAll('.color-btn').forEach((btn, index) => {
        const family = colorFamilies[index];
        btn.classList.toggle('selected', state.selectedFilters.colorFamily === family);
    });
}

function updateFilterDisplay() {
    // Update finish buttons
    document.querySelectorAll('.finish-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === state.selectedFilters.finish);
    });
    
    // Show/hide clear filters button
    const hasActiveFilters = Object.values(state.selectedFilters).some(filter => filter !== '');
    document.getElementById('clearFiltersBtn').style.display = hasActiveFilters ? 'block' : 'none';
}

function getFilteredColors() {
    return colors.filter(color => {
        const matchesSearch = color.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                             color.family.toLowerCase().includes(state.searchTerm.toLowerCase());
        
        const matchesEnvironment = !state.selectedFilters.environment || 
                                  color.environments.includes(state.selectedFilters.environment);
        const matchesFinish = !state.selectedFilters.finish || color.finish === state.selectedFilters.finish;
        const matchesFamily = !state.selectedFilters.colorFamily || color.family === state.selectedFilters.colorFamily;
        const matchesCategory = color.category === (state.activeTab === 'ready-colors' ? 'Cores prontas' : 'Cores do leque');
        const matchesSurface = !state.selectedFilters.surface; // Surface filter logic would go here
        
        return matchesSearch && matchesEnvironment && matchesFinish && matchesFamily && matchesCategory && matchesSurface;
    });
}

function createColorCard(color) {
    const card = document.createElement('div');
    card.className = `color-card ${state.viewMode === 'list' ? 'list-view' : ''}`;
    
    const environmentTags = color.environments.map(env => 
        `<span class="color-tag tag-environment">${env}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="color-preview" style="background-color: ${color.code}">
            <button class="favorite-btn">
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="color-info">
            <div class="color-header">
                <div>
                    <h3 class="color-name">${color.name}</h3>
                    <p class="color-code">${color.code}</p>
                </div>
                ${state.viewMode === 'list' ? `<button class="favorite-btn"><i class="far fa-heart"></i></button>` : ''}
            </div>
            <div class="color-tags">
                <span class="color-tag tag-family">${color.family}</span>
                <span class="color-tag tag-finish">${color.finish}</span>
                ${state.viewMode === 'list' ? environmentTags : ''}
            </div>
            <div class="color-actions">
                <button class="action-btn primary">Ver Detalhes</button>
                <button class="action-btn secondary">Simular Ambiente</button>
            </div>
        </div>
    `;
    
    return card;
}

function updateDisplay() {
    const filteredColors = getFilteredColors();
    const grid = document.getElementById('colorsGrid');
    const noResults = document.getElementById('noResults');
    const colorCount = document.getElementById('colorCount');
    const viewAllLink = document.getElementById('viewAllLink');
    
    // Clear grid
    grid.innerHTML = '';
    
    if (filteredColors.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        
        filteredColors.forEach(color => {
            grid.appendChild(createColorCard(color));
        });
    }
    
    // Update color count
    const categoryName = state.activeTab === 'ready-colors' ? 'Neutro Frio' : 'Cores do leque';
    colorCount.textContent = `${categoryName} (${filteredColors.length})`;
    
    // Update view all link
    const totalInCategory = colors.filter(c => 
        c.category === (state.activeTab === 'ready-colors' ? 'Cores prontas' : 'Cores do leque')
    ).length;
    
    if (filteredColors.length > 0) {
        viewAllLink.style.display = 'inline';
        viewAllLink.textContent = `Veja todas as cores (${totalInCategory})`;
    } else {
        viewAllLink.style.display = 'none';
    }
}
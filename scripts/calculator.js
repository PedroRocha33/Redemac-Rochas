// Script para as calculadoras da Redemac Rochas
document.addEventListener('DOMContentLoaded', function() {
    // Configurar navegação entre calculadoras
    setupCalculatorNavigation();
    
    // Inicializar todas as calculadoras
    initAreaCalculator();
    initVolumeCalculator();
    initPaintCalculator();
    initMaterialsCalculator();
    initBudgetCalculator();
    initTilingCalculator();
});

// Função para configurar a navegação entre calculadoras
function setupCalculatorNavigation() {
    const calculatorButtons = document.querySelectorAll('.calculator-card .btn');
    
    calculatorButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Identificar qual calculadora foi selecionada
            const calculatorType = this.textContent.replace('Calcular ', '').trim().toLowerCase();
            
            // Mostrar o modal da calculadora apropriada
            showCalculatorModal(calculatorType);
        });
    });
}

// Função para mostrar o modal da calculadora selecionada
function showCalculatorModal(calculatorType) {
    // Primeiro, crie o modal se ainda não existir
    let modal = document.getElementById(`${calculatorType}-calculator-modal`);
    
    if (!modal) {
        modal = createCalculatorModal(calculatorType);
        document.body.appendChild(modal);
    }
    
    // Mostrar o modal
    modal.style.display = 'flex';
}

// Função para criar o modal da calculadora
function createCalculatorModal(calculatorType) {
    const modal = document.createElement('div');
    modal.id = `${calculatorType}-calculator-modal`;
    modal.className = 'calculator-modal';
    
    let calculatorContent = '';
    
    // Configurar o conteúdo específico para cada tipo de calculadora
    switch(calculatorType) {
        case 'área':
            calculatorContent = createAreaCalculatorContent();
            break;
        case 'volume':
            calculatorContent = createVolumeCalculatorContent();
            break;
        case 'tinta':
            calculatorContent = createPaintCalculatorContent();
            break;
        case 'materiais':
            calculatorContent = createMaterialsCalculatorContent();
            break;
        case 'orçamento':
            calculatorContent = createBudgetCalculatorContent();
            break;
        case 'revestimento':
            calculatorContent = createTilingCalculatorContent();
            break;
        default:
            calculatorContent = '<p>Calculadora não disponível no momento.</p>';
    }
    
    modal.innerHTML = `
        <div class="calculator-modal-content">
            <div class="calculator-modal-header">
                <h2>Calculadora de ${calculatorType.charAt(0).toUpperCase() + calculatorType.slice(1)}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="calculator-modal-body">
                ${calculatorContent}
            </div>
        </div>
    `;
    
    // Adicionar evento para fechar o modal
    modal.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar o modal se clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    return modal;
}

// Conteúdos específicos para cada calculadora
function createAreaCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="area-length">Comprimento (metros):</label>
                <input type="number" id="area-length" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="area-width">Largura (metros):</label>
                <input type="number" id="area-width" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="area-type">Tipo de Projeto:</label>
                <select id="area-type">
                    <option value="piso">Piso</option>
                    <option value="parede">Revestimento de Parede</option>
                    <option value="teto">Teto</option>
                    <option value="terreno">Terreno</option>
                </select>
            </div>
            <div class="form-group">
                <label for="area-waste">Percentual de Perda (%):</label>
                <input type="number" id="area-waste" value="10" min="0" max="100">
            </div>
            <button id="calculate-area" class="btn btn-primary">Calcular</button>
            
            <div id="area-result" class="result-container">
                <h3>Resultado:</h3>
                <div class="result-item">
                    <span>Área Total:</span>
                    <span id="total-area">0 m²</span>
                </div>
                <div class="result-item">
                    <span>Área com Perda:</span>
                    <span id="area-with-waste">0 m²</span>
                </div>
            </div>
        </div>
    `;
}

function createVolumeCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="volume-length">Comprimento (metros):</label>
                <input type="number" id="volume-length" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="volume-width">Largura (metros):</label>
                <input type="number" id="volume-width" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="volume-height">Altura (metros):</label>
                <input type="number" id="volume-height" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="volume-type">Tipo de Material:</label>
                <select id="volume-type">
                    <option value="concreto">Concreto</option>
                    <option value="argamassa">Argamassa</option>
                    <option value="aterro">Aterro</option>
                    <option value="pedra">Pedra Britada</option>
                    <option value="areia">Areia</option>
                </select>
            </div>
            <div class="form-group">
                <label for="volume-waste">Percentual de Perda (%):</label>
                <input type="number" id="volume-waste" value="5" min="0" max="100">
            </div>
            <button id="calculate-volume" class="btn btn-primary">Calcular</button>
            
            <div id="volume-result" class="result-container">
                <h3>Resultado:</h3>
                <div class="result-item">
                    <span>Volume Total:</span>
                    <span id="total-volume">0 m³</span>
                </div>
                <div class="result-item">
                    <span>Volume com Perda:</span>
                    <span id="volume-with-waste">0 m³</span>
                </div>
                <div class="result-item">
                    <span>Quantidade Estimada:</span>
                    <span id="material-quantity">0</span>
                </div>
            </div>
        </div>
    `;
}

function createPaintCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="paint-area">Área Total a Pintar (m²):</label>
                <input type="number" id="paint-area" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="paint-type">Tipo de Tinta:</label>
                <select id="paint-type">
                    <option value="acrilica">Tinta Acrílica</option>
                    <option value="latex">Tinta Látex PVA</option>
                    <option value="esmalte">Esmalte Sintético</option>
                    <option value="textura">Textura</option>
                </select>
            </div>
            <div class="form-group">
                <label for="paint-coats">Número de Demãos:</label>
                <input type="number" id="paint-coats" value="2" min="1" max="5">
            </div>
            <div class="form-group">
                <label for="paint-waste">Percentual de Perda (%):</label>
                <input type="number" id="paint-waste" value="10" min="0" max="100">
            </div>
            <button id="calculate-paint" class="btn btn-primary">Calcular</button>
            
            <div id="paint-result" class="result-container">
                <h3>Resultado:</h3>
                <div class="result-item">
                    <span>Área Total:</span>
                    <span id="total-paint-area">0 m²</span>
                </div>
                <div class="result-item">
                    <span>Quantidade de Tinta:</span>
                    <span id="paint-quantity">0 litros</span>
                </div>
                <div class="result-item">
                    <span>Latas de 18L:</span>
                    <span id="paint-cans-18l">0</span>
                </div>
                <div class="result-item">
                    <span>Latas de 3.6L:</span>
                    <span id="paint-cans-3-6l">0</span>
                </div>
                <div class="result-item">
                    <span>Latas de 0.9L:</span>
                    <span id="paint-cans-0-9l">0</span>
                </div>
            </div>
        </div>
    `;
}

function createMaterialsCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="material-type">Tipo de Construção:</label>
                <select id="material-type">
                    <option value="alvenaria">Alvenaria Convencional</option>
                    <option value="concreto">Construção em Concreto</option>
                    <option value="reforma">Reforma</option>
                </select>
            </div>
            <div class="form-group">
                <label for="material-area">Área da Construção (m²):</label>
                <input type="number" id="material-area" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="material-rooms">Número de Cômodos:</label>
                <input type="number" id="material-rooms" value="4" min="1">
            </div>
            <div class="form-group">
                <label for="material-bathrooms">Número de Banheiros:</label>
                <input type="number" id="material-bathrooms" value="1" min="0">
            </div>
            <button id="calculate-materials" class="btn btn-primary">Calcular</button>
            
            <div id="materials-result" class="result-container">
                <h3>Estimativa de Materiais Básicos:</h3>
                <div class="result-item">
                    <span>Cimento:</span>
                    <span id="cement-quantity">0 sacos</span>
                </div>
                <div class="result-item">
                    <span>Areia:</span>
                    <span id="sand-quantity">0 m³</span>
                </div>
                <div class="result-item">
                    <span>Brita:</span>
                    <span id="gravel-quantity">0 m³</span>
                </div>
                <div class="result-item">
                    <span>Tijolos:</span>
                    <span id="bricks-quantity">0 unidades</span>
                </div>
                <div class="result-item">
                    <span>Aço:</span>
                    <span id="steel-quantity">0 kg</span>
                </div>
                <div class="result-note">
                    <p><strong>Nota:</strong> Esta é uma estimativa básica. Consulte um profissional para um orçamento detalhado.</p>
                </div>
            </div>
        </div>
    `;
}

function createBudgetCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="budget-area">Área Total (m²):</label>
                <input type="number" id="budget-area" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="budget-type">Tipo de Construção:</label>
                <select id="budget-type">
                    <option value="baixo">Padrão Baixo</option>
                    <option value="medio">Padrão Médio</option>
                    <option value="alto">Padrão Alto</option>
                    <option value="reforma">Reforma</option>
                </select>
            </div>
            <div class="form-group">
                <label for="budget-location">Localização:</label>
                <select id="budget-location">
                    <option value="urbana">Área Urbana</option>
                    <option value="rural">Área Rural</option>
                </select>
            </div>
            <button id="calculate-budget" class="btn btn-primary">Calcular</button>
            
            <div id="budget-result" class="result-container">
                <h3>Estimativa de Orçamento:</h3>
                <div class="result-item">
                    <span>Custo Total Estimado:</span>
                    <span id="total-budget">R$ 0,00</span>
                </div>
                <div class="result-item">
                    <span>Custo por m²:</span>
                    <span id="budget-per-sqm">R$ 0,00</span>
                </div>
                <div class="budget-breakdown">
                    <h4>Divisão Aproximada de Custos:</h4>
                    <div class="result-item">
                        <span>Materiais (60%):</span>
                        <span id="materials-cost">R$ 0,00</span>
                    </div>
                    <div class="result-item">
                        <span>Mão de Obra (35%):</span>
                        <span id="labor-cost">R$ 0,00</span>
                    </div>
                    <div class="result-item">
                        <span>Outras Despesas (5%):</span>
                        <span id="other-costs">R$ 0,00</span>
                    </div>
                </div>
                <div class="result-note">
                    <p><strong>Nota:</strong> Este é um orçamento aproximado. Para um orçamento detalhado, consulte um profissional.</p>
                </div>
            </div>
        </div>
    `;
}

function createTilingCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="tiling-length">Comprimento da Área (metros):</label>
                <input type="number" id="tiling-length" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="tiling-width">Largura da Área (metros):</label>
                <input type="number" id="tiling-width" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="tile-type">Tipo de Revestimento:</label>
                <select id="tile-type">
                    <option value="ceramica">Cerâmica</option>
                    <option value="porcelanato">Porcelanato</option>
                    <option value="granito">Granito</option>
                    <option value="marmore">Mármore</option>
                    <option value="laminado">Piso Laminado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="tile-size">Tamanho do Revestimento:</label>
                <select id="tile-size">
                    <option value="30x30">30x30 cm</option>
                    <option value="45x45">45x45 cm</option>
                    <option value="60x60">60x60 cm</option>
                    <option value="90x90">90x90 cm</option>
                    <option value="15x90">15x90 cm (Madeira)</option>
                    <option value="custom">Tamanho Personalizado</option>
                </select>
            </div>
            <div id="custom-tile-size" class="form-group hidden">
                <label for="custom-tile-length">Comprimento da Peça (cm):</label>
                <input type="number" id="custom-tile-length" step="0.1" min="0">
                <label for="custom-tile-width">Largura da Peça (cm):</label>
                <input type="number" id="custom-tile-width" step="0.1" min="0">
            </div>
            <div class="form-group">
                <label for="tiling-waste">Percentual de Perda (%):</label>
                <input type="number" id="tiling-waste" value="10" min="0" max="100">
            </div>
            <div class="form-group">
                <label for="grout-width">Largura da Junta (mm):</label>
                <input type="number" id="grout-width" value="3" min="0" max="20">
            </div>
            <button id="calculate-tiling" class="btn btn-primary">Calcular</button>
            
            <div id="tiling-result" class="result-container">
                <h3>Resultado:</h3>
                <div class="result-item">
                    <span>Área Total:</span>
                    <span id="total-tiling-area">0 m²</span>
                </div>
                <div class="result-item">
                    <span>Quantidade de Peças:</span>
                    <span id="tile-quantity">0 peças</span>
                </div>
                <div class="result-item">
                    <span>Quantidade de Caixas:</span>
                    <span id="tile-boxes">0 caixas</span>
                </div>
                <div class="result-item">
                    <span>Rejunte Necessário:</span>
                    <span id="grout-quantity">0 kg</span>
                </div>
                <div class="result-item">
                    <span>Argamassa Necessária:</span>
                    <span id="mortar-quantity">0 kg</span>
                </div>
            </div>
        </div>
    `;
}

// Modificações na função initAreaCalculator() para exibir resultados logo abaixo do botão
function initAreaCalculator() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-area') {
            const length = parseFloat(document.getElementById('area-length').value) || 0;
            const width = parseFloat(document.getElementById('area-width').value) || 0;
            const wastePercentage = parseFloat(document.getElementById('area-waste').value) || 0;
            
            if (length <= 0 || width <= 0) {
                alert('Por favor, insira dimensões válidas.');
                return;
            }
            
            const totalArea = length * width;
            const areaWithWaste = totalArea * (1 + wastePercentage / 100);
            
            document.getElementById('total-area').textContent = totalArea.toFixed(2) + ' m²';
            document.getElementById('area-with-waste').textContent = areaWithWaste.toFixed(2) + ' m²';
            
            // Tornar o container de resultado visível
            document.getElementById('area-result').classList.add('visible');
            
            // Rolar suavemente até o resultado
            document.getElementById('area-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Modificar todas as outras funções de cálculo para exibir resultados de forma semelhante
function initVolumeCalculator() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-volume') {
            const length = parseFloat(document.getElementById('volume-length').value) || 0;
            const width = parseFloat(document.getElementById('volume-width').value) || 0;
            const height = parseFloat(document.getElementById('volume-height').value) || 0;
            const wastePercentage = parseFloat(document.getElementById('volume-waste').value) || 0;
            const materialType = document.getElementById('volume-type').value;
            
            if (length <= 0 || width <= 0 || height <= 0) {
                alert('Por favor, insira dimensões válidas.');
                return;
            }
            
            const totalVolume = length * width * height;
            const volumeWithWaste = totalVolume * (1 + wastePercentage / 100);
            
            // Cálculo específico baseado no tipo de material
            let materialQuantity = '';
            switch(materialType) {
                case 'concreto':
                    materialQuantity = (volumeWithWaste * 2400).toFixed(0) + ' kg (≈ ' + Math.ceil(volumeWithWaste * 2400 / 50) + ' sacos de cimento)';
                    break;
                case 'argamassa':
                    materialQuantity = (volumeWithWaste * 2000).toFixed(0) + ' kg (≈ ' + Math.ceil(volumeWithWaste * 2000 / 20) + ' sacos de argamassa)';
                    break;
                case 'aterro':
                    materialQuantity = volumeWithWaste.toFixed(2) + ' m³';
                    break;
                case 'pedra':
                    materialQuantity = (volumeWithWaste * 1500).toFixed(0) + ' kg';
                    break;
                case 'areia':
                    materialQuantity = (volumeWithWaste * 1600).toFixed(0) + ' kg';
                    break;
                default:
                    materialQuantity = volumeWithWaste.toFixed(2) + ' m³';
            }
            
            document.getElementById('total-volume').textContent = totalVolume.toFixed(2) + ' m³';
            document.getElementById('volume-with-waste').textContent = volumeWithWaste.toFixed(2) + ' m³';
            document.getElementById('material-quantity').textContent = materialQuantity;
            
            // Tornar o container de resultado visível
            document.getElementById('volume-result').classList.add('visible');
            
            // Rolar suavemente até o resultado
            document.getElementById('volume-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function initPaintCalculator() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-paint') {
            const area = parseFloat(document.getElementById('paint-area').value) || 0;
            const coats = parseInt(document.getElementById('paint-coats').value) || 1;
            const wastePercentage = parseFloat(document.getElementById('paint-waste').value) || 0;
            const paintType = document.getElementById('paint-type').value;
            
            if (area <= 0) {
                alert('Por favor, insira uma área válida.');
                return;
            }
            
            // Rendimento médio por tipo de tinta (m²/litro)
            let coverage = 0;
            switch(paintType) {
                case 'acrilica':
                    coverage = 12; // m²/litro
                    break;
                case 'latex':
                    coverage = 10; // m²/litro
                    break;
                case 'esmalte':
                    coverage = 14; // m²/litro
                    break;
                case 'textura':
                    coverage = 6; // m²/litro
                    break;
                default:
                    coverage = 10;
            }
            
            // Cálculo da quantidade de tinta
            const paintQuantity = (area * coats / coverage) * (1 + wastePercentage / 100);
            
            // Cálculo das latas de tinta (otimização de compra)
            let remaining = paintQuantity;
            let cans18L = Math.floor(remaining / 18);
            remaining -= cans18L * 18;
            
            let cans3_6L = Math.floor(remaining / 3.6);
            remaining -= cans3_6L * 3.6;
            
            let cans0_9L = Math.ceil(remaining / 0.9);
            
            // Ajustes para otimizar (substituir várias latas pequenas por maiores)
            if (cans0_9L >= 4) {
                cans3_6L += 1;
                cans0_9L = 0;
            }
            
            if (cans3_6L >= 5) {
                cans18L += 1;
                cans3_6L = 0;
            }
            
            document.getElementById('total-paint-area').textContent = area.toFixed(2) + ' m²';
            document.getElementById('paint-quantity').textContent = paintQuantity.toFixed(2) + ' litros';
            document.getElementById('paint-cans-18l').textContent = cans18L;
            document.getElementById('paint-cans-3-6l').textContent = cans3_6L;
            document.getElementById('paint-cans-0-9l').textContent = cans0_9L;
            
            // Tornar o container de resultado visível
            document.getElementById('paint-result').classList.add('visible');
            
            // Rolar suavemente até o resultado
            document.getElementById('paint-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function initMaterialsCalculator() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-materials') {
            const area = parseFloat(document.getElementById('material-area').value) || 0;
            const rooms = parseInt(document.getElementById('material-rooms').value) || 0;
            const bathrooms = parseInt(document.getElementById('material-bathrooms').value) || 0;
            const constructionType = document.getElementById('material-type').value;
            
            if (area <= 0) {
                alert('Por favor, insira uma área válida.');
                return;
            }
            
            // Estimativas aproximadas baseadas em padrões da construção civil brasileira
            let cementFactor = 0;
            let sandFactor = 0;
            let gravelFactor = 0;
            let bricksFactor = 0;
            let steelFactor = 0;
            
            switch(constructionType) {
                case 'alvenaria':
                    cementFactor = 1.8; // sacos por m²
                    sandFactor = 0.15; // m³ por m²
                    gravelFactor = 0.10; // m³ por m²
                    bricksFactor = 25; // tijolos por m²
                    steelFactor = 8; // kg por m²
                    break;
                case 'concreto':
                    cementFactor = 2.2; // sacos por m²
                    sandFactor = 0.18; // m³ por m²
                    gravelFactor = 0.15; // m³ por m²
                    bricksFactor = 5; // tijolos por m² (menos por ser concreto)
                    steelFactor = 12; // kg por m² (mais por ser concreto)
                    break;
                case 'reforma':
                    cementFactor = 1.2; // sacos por m²
                    sandFactor = 0.10; // m³ por m²
                    gravelFactor = 0.05; // m³ por m²
                    bricksFactor = 10; // tijolos por m²
                    steelFactor = 4; // kg por m²
                    break;
                default:
                    cementFactor = 1.8;
                    sandFactor = 0.15;
                    gravelFactor = 0.10;
                    bricksFactor = 25;
                    steelFactor = 8;
            }
            
            // Ajuste adicional para banheiros (requerem mais materiais)
            const bathroomFactor = 1 + (bathrooms * 0.1);
            
            // Cálculo das quantidades
            const cement = Math.ceil(area * cementFactor * bathroomFactor);
            const sand = (area * sandFactor * bathroomFactor).toFixed(2);
            const gravel = (area * gravelFactor * bathroomFactor).toFixed(2);
            const bricks = Math.ceil(area * bricksFactor);
            const steel = Math.ceil(area * steelFactor);
            
            document.getElementById('cement-quantity').textContent = cement + ' sacos';
            document.getElementById('sand-quantity').textContent = sand + ' m³';
            document.getElementById('gravel-quantity').textContent = gravel + ' m³';
            document.getElementById('bricks-quantity').textContent = bricks + ' unidades';
            document.getElementById('steel-quantity').textContent = steel + ' kg';
            
            // Tornar o container de resultado visível
            document.getElementById('materials-result').classList.add('visible');
            
            // Rolar suavemente até o resultado
            document.getElementById('materials-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function initBudgetCalculator() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-budget') {
            const area = parseFloat(document.getElementById('budget-area').value) || 0;
            const constructionType = document.getElementById('budget-type').value;
            const location = document.getElementById('budget-location').value;
            
            if (area <= 0) {
                alert('Por favor, insira uma área válida.');
                return;
            }
            
            // Valores base de custo por m² (valores fictícios para exemplo)
            let baseCost = 0;
            switch(constructionType) {
                case 'baixo':
                    baseCost = 1500; // R$/m²
                    break;
                case 'medio':
                    baseCost = 2200; // R$/m²
                    break;
                case 'alto':
                    baseCost = 3500; // R$/m²
                    break;
                case 'reforma':
                    baseCost = 1000; // R$/m²
                    break;
                default:
                    baseCost = 1800;
            }
            
            // Ajuste pelo local
            const locationFactor = location === 'rural' ? 1.15 : 1.0; // 15% mais caro em áreas rurais
            
            // Cálculo final do orçamento
            const totalBudget = area * baseCost * locationFactor;
            const budgetPerSqm = totalBudget / area;
            
            // Divisão de custos
            const materialsCost = totalBudget * 0.6; // 60% materiais
            const laborCost = totalBudget * 0.35; // 35% mão de obra
            const otherCosts = totalBudget * 0.05; // 5% outras despesas
            
            // Formatação dos valores em Reais
            const formatCurrency = (value) => {
                return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            };
            
            document.getElementById('total-budget').textContent = formatCurrency(totalBudget);
            document.getElementById('budget-per-sqm').textContent = formatCurrency(budgetPerSqm);
            document.getElementById('materials-cost').textContent = formatCurrency(materialsCost);
            document.getElementById('labor-cost').textContent = formatCurrency(laborCost);
            document.getElementById('other-costs').textContent = formatCurrency(otherCosts);
            
            // Tornar o container de resultado visível
            document.getElementById('budget-result').classList.add('visible');
            
            // Rolar suavemente até o resultado
            document.getElementById('budget-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function initTilingCalculator() {
    // Ocultar/mostrar campos de tamanho personalizado
    document.addEventListener('change', function(e) {
        if (e.target && e.target.id === 'tile-size') {
            const customSizeDiv = document.getElementById('custom-tile-size');
            if (e.target.value === 'custom') {
                customSizeDiv.classList.remove('hidden');
            } else {
                customSizeDiv.classList.add('hidden');
            }
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-tiling') {
            const length = parseFloat(document.getElementById('tiling-length').value) || 0;
            const width = parseFloat(document.getElementById('tiling-width').value) || 0;
            const wastePercentage = parseFloat(document.getElementById('tiling-waste').value) || 0;
            const groutWidth = parseFloat(document.getElementById('grout-width').value) || 0;
            const tileType = document.getElementById('tile-type').value;
            const tileSize = document.getElementById('tile-size').value;
            
            if (length <= 0 || width <= 0) {
                alert('Por favor, insira dimensões válidas.');
                return;
            }
            
            // Dimensões do revestimento em metros
            let tileLength = 0;
            let tileWidth = 0;
            
            if (tileSize === 'custom') {
                tileLength = (parseFloat(document.getElementById('custom-tile-length').value) || 0) / 100; // cm para m
                tileWidth = (parseFloat(document.getElementById('custom-tile-width').value) || 0) / 100; // cm para m
                
                if (tileLength <= 0 || tileWidth <= 0) {
                    alert('Por favor, insira um tamanho de revestimento válido.');
                    return;
                }
            } else {
                // Converter formato "30x30" para valores numéricos
                const dimensions = tileSize.split('x');
                tileLength = parseInt(dimensions[0]) / 100; // cm para m
                tileWidth = parseInt(dimensions[1]) / 100; // cm para m
            }
            
            // Área total a ser revestida
            const totalArea = length * width;
            
            // Área efetiva de cada peça (considerando o rejunte)
            const groutMeters = groutWidth / 1000; // mm para m
            const effectiveTileLength = tileLength + groutMeters;
            const effectiveTileWidth = tileWidth + groutMeters;
            const effectiveTileArea = effectiveTileLength * effectiveTileWidth;
            
            // Quantidade de peças necessárias
            let tileQuantity = Math.ceil(totalArea / (tileLength * tileWidth));
            
            // Adicionar percentual de perda
            tileQuantity = Math.ceil(tileQuantity * (1 + wastePercentage / 100));
            
            // Estimar quantidade de caixas (assumindo valores padrão por tipo de revestimento)
            let tilesPerBox = 0;
            switch(tileType) {
                case 'ceramica':
                    tilesPerBox = tileLength <= 0.3 ? 20 : (tileLength <= 0.45 ? 10 : 6);
                    break;
                case 'porcelanato':
                    tilesPerBox = tileLength <= 0.6 ? 5 : 3;
                    break;
                case 'granito':
                case 'marmore':
                    tilesPerBox = 1; // Geralmente vendido por peça
                    break;
                case 'laminado':
                    tilesPerBox = 8; // Aproximadamente 2m² por caixa
                    break;
                default:
                    tilesPerBox = 10;
            }
            
            const boxQuantity = Math.ceil(tileQuantity / tilesPerBox);
            
            // Estimar quantidade de rejunte (kg)
            const groutQuantity = ((tileLength + tileWidth) / (tileLength * tileWidth)) * 
                                 (groutWidth / 1000) * (groutWidth / 1000) * totalArea * 0.17;
            
            // Estimar quantidade de argamassa (kg)
            let mortarPerSqm = 0;
            switch(tileType) {
                case 'ceramica':
                    mortarPerSqm = 4;
                    break;
                case 'porcelanato':
                    mortarPerSqm = 5;
                    break;
                case 'granito':
                case 'marmore':
                    mortarPerSqm = 7; // Peças mais pesadas
                    break;
                case 'laminado':
                    mortarPerSqm = 0.5; // Cola especial
                    break;
                default:
                    mortarPerSqm = 4.5;
            }
            
            const mortarQuantity = totalArea * mortarPerSqm * (1 + wastePercentage / 100);
            
            // Atualizar os resultados
            document.getElementById('total-tiling-area').textContent = totalArea.toFixed(2) + ' m²';
            document.getElementById('tile-quantity').textContent = tileQuantity + ' peças';
            document.getElementById('tile-boxes').textContent = boxQuantity + ' caixas';
            document.getElementById('grout-quantity').textContent = groutQuantity.toFixed(1) + ' kg';
            document.getElementById('mortar-quantity').textContent = mortarQuantity.toFixed(1) + ' kg';
            
            // Tornar o container de resultado visível
            document.getElementById('tiling-result').classList.add('visible');
            
            // Rolar suavemente até o resultado
            document.getElementById('tiling-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Modificação na função createAreaCalculatorContent para ajustar o CSS do resultado
function createAreaCalculatorContent() {
    return `
        <div class="calculator-form">
            <div class="form-group">
                <label for="area-length">Comprimento (metros):</label>
                <input type="number" id="area-length" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="area-width">Largura (metros):</label>
                <input type="number" id="area-width" step="0.01" min="0">
            </div>
            <div class="form-group">
                <label for="area-type">Tipo de Projeto:</label>
                <select id="area-type">
                    <option value="piso">Piso</option>
                    <option value="parede">Revestimento de Parede</option>
                    <option value="teto">Teto</option>
                    <option value="terreno">Terreno</option>
                </select>
            </div>
            <div class="form-group">
                <label for="area-waste">Percentual de Perda (%):</label>
                <input type="number" id="area-waste" value="10" min="0" max="100">
            </div>
            <button id="calculate-area" class="btn btn-primary">Calcular</button>
            
            <div id="area-result" class="result-container">
                <h3>Resultado:</h3>
                <div class="result-item">
                    <span>Área Total:</span>
                    <span id="total-area">0 m²</span>
                </div>
                <div class="result-item">
                    <span>Área com Perda:</span>
                    <span id="area-with-waste">0 m²</span>
                </div>
            </div>
        </div>
    `;
}
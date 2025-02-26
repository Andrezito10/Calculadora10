let currentInput = '';
let operator = '';
let previousInput = '';
let history = []; 

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1); 
    document.getElementById('display').value = currentInput; 
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }

   
    let operation = `${previousInput} ${operator} ${currentInput} = ${result}`;
    history.push(operation);

    
    updateHistory();

   
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
}

function updateHistory() {
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = ''; // Limpa o histórico atual

    history.forEach((operation, index) => {
        let operationElement = document.createElement('div');
        operationElement.classList.add('history-item');
        operationElement.textContent = operation;
        historyDiv.appendChild(operationElement);
    });
}

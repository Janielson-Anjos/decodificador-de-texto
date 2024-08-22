function encryptText() {
    const inputText = document.getElementById('input-text').value;
    if (!isValidInput(inputText)) {
        alert('Por favor, insira apenas letras minúsculas sem acentos.');
        return;
    }
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    displayOutput(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    displayOutput(decryptedText);
}

function isValidInput(text) {
    const regex = /^[a-z0-9\s.,?]*$/;
    return regex.test(text);
}

function displayOutput(text) {
    const outputMsg = document.getElementById('output-msg');
    const placeholderImg = document.getElementById('placeholder-img');
    const instructionText = document.getElementById('instruction-text');

    outputMsg.textContent = text;
    outputMsg.style.color = '#333';


    placeholderImg.style.display = 'none';
    instructionText.style.display = 'none';
}

function copyText() {
    const outputText = document.getElementById('output-msg').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado para a área de transferência!');
    });
}

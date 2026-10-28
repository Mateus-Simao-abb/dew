const nomeInput = document.getElementById("nome");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const resultado = document.getElementById("resultado");

function CalcularMedia() {
    const nome = nomeInput.value.trim();
    const nota1 = n1.valueAsNumber;
    const nota2 = n2.valueAsNumber;

    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        resultado.textContent = "Preencha todos os campos";
        return;
    }

    const valorMedia = (nota1 + nota2) / 2;

    if (valorMedia >= 6) {
        resultado.textContent = nome + ", a sua média foi: " + valorMedia.toFixed(1) + " - Aprovado";
    } else {
        resultado.textContent = nome + ", a sua média foi: " + valorMedia.toFixed(1) + " - Reprovado";
    }

    return;
}


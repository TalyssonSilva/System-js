/* FUNCAO PARA TROCAR O TEMA*/
function changeTheme() {
  const dark = document.getElementById("B/w");
  const temas = document.getElementById("tema");
  if (temas.getAttribute("href") == "light.css") {
    temas.href = "dark.css";
    dark.innerHTML = "<i class='material-icons'>brightness_6</i>";
  } else {
    temas.href = "light.css";
    dark.innerHTML = "<i class='material-icons'>brightness_6</i>";
  }
}

/* FUNCAO PARA PEGAR OS VALORES E REALIZAR AS OPERACOES*/
function liveScreen(value) {
  document.getElementById("resultado2").value += value;
}

/* FUNCAO PARA LIMPAR O HISTORICO DAR O REFRESH NA PAGINA E REALIZAR A LIMPEZA DO STORAGE*/
function clearScreen() {
  document.getElementById("resultado2").value = "";

  localStorage.setItem('listResults', JSON.stringify([]))
  document.getElementById("history").replaceChildren();
}


/* FUNCAO PARA APAGAR O ULTIMO NUMERO DIGITADO*/
function clearback() {
  const input = document.getElementById('resultado2');
  const inputText = input.value;
  input.value = inputText.substring(0, inputText.length-1);
}

/* FUNCOES PARA REALIZAÇÃO DO HISTORICO DA CALCULADORA UTILIZANDO LOCAL STORAGE*/
function saveResult(value) {
  const resultados = JSON.parse(localStorage.getItem('listResults'));
  resultados.push(value);
  appendValueHistory(value);
  localStorage.setItem('listResults', JSON.stringify(resultados))
};

function result() {
  resultado2.value = eval(resultado2.value);

  saveResult(resultado2.value);
};

function appendValueHistory(value) {
  const nodeElementValue = document.createElement("p");
  nodeElementValue.innerText = value;

  document.getElementById("history").appendChild(nodeElementValue);
};

document.addEventListener("DOMContentLoaded", function() {
  const listResults = localStorage.getItem('listResults');

  !listResults ?
    localStorage.setItem('listResults', JSON.stringify([]))
      : JSON.parse(listResults).forEach((value) => {
        appendValueHistory(value);
      });
});

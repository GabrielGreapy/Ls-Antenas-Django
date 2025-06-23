function Pesquisar() {
    let elemento = document.getElementById("pesquisa");
    let termo = elemento.value.toLowerCase();

    const lista_de_cidades = [
        { 'nome': 'Picui' },
        { 'nome': 'Picuí' },
        { 'nome': 'Frei martinho' },
        { 'nome': 'Barauna' },
        { 'nome': 'Barra de Santa Rosa' },
        { 'nome': 'Cuité' },
        { 'nome': 'Cubati' },
        { 'nome': 'Nova Palmeira' },
        { 'nome': 'Nova Floresta' },
        { 'nome': 'Sossego' },
        { 'nome': 'São Vincente' },
        { 'nome': 'Solidade' },
        { 'nome': 'Damião' },
        { 'nome': 'Algodão de Jnadaíra' },
        { 'nome': 'Pedra Lavrada' }
    ];

    let resultado = lista_de_cidades.filter(cidade =>
        cidade.nome.toLowerCase().includes(termo)
    );

    let divResultado = document.querySelector(".pesquisado-conteudo");
    let divPopup = document.getElementById("pesquisado");

    if (termo === "") {
        divResultado.innerHTML = "Digite uma cidade para pesquisar.";
    } else if (resultado.length > 0) {
        divResultado.innerHTML = "Encontrado(s):<br><br>" +
            resultado.map(c => `• ${c.nome}`).join("<br>");
    } else {
        divResultado.innerHTML = "Cidade não encontrada.";
    }

    divPopup.style.display = "block";

    divPopup.onclick = function (e) {
        if (e.target.id === "pesquisado") {
            divPopup.style.display = "none";
        }
    }
}





function mostrarContrato30() {
  document.getElementById("contrato30").style.display = "flex";
}

function fecharContrato30() {
  document.getElementById("contrato30").style.display = "none";
}
function mostrarContrato50() {
  document.getElementById("contrato50").style.display = "flex";
}

function fecharContrato50() {
  document.getElementById("contrato50").style.display = "none";
}
function mostrarContrato100() {
  document.getElementById("contrato100").style.display = "flex";
}

function fecharContrato100() {
  document.getElementById("contrato100").style.display = "none";
}
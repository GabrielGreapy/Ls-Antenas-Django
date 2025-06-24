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





window.mostrarContrato30 = function() {
  document.getElementById("contrato30").style.display = "flex";
};

window.fecharContrato30 = function() {
  document.getElementById("contrato30").style.display = "none";
};

window.mostrarContrato50 = function() {
  document.getElementById("contrato50").style.display = "flex";
};

window.fecharContrato50 = function() {
  document.getElementById("contrato50").style.display = "none";
};

window.mostrarContrato100 = function() {
  document.getElementById("contrato100").style.display = "flex";
};

window.fecharContrato100 = function() {
  document.getElementById("contrato100").style.display = "none";
};

window.mostrarContrato200 = function() {
  document.getElementById("contrato200").style.display = "flex";
};

window.fecharContrato200 = function() {
  document.getElementById("contrato200").style.display = "none";
};

function Pesquisar(){
    elemento = document.getElementById("pesquisa")
    const lista_de_cidades = [
        {'nome':'Picuí'},
        {'nome':'Frei martinho'},
        {'nome':'Barauna'},
        {'nome':'Barra de Santa Rosa'},
        {'nome':'Cuité'},
        {'nome':'Cubati'},
        {'nome':'Nova Palmeira'},
        {'nome':'Nova Floresta'},
        {'nome':'Sossego'},
        {'nome':'São Vincente'},
        {'nome':'Solidade'},
        {'nome':'Damião'},
        {'nome':'Algodão de Jnadaíra'},
        {'nome':'Pedra Lavrada'}
    ]
    for(let i in lista_de_cidades){
        if( i == elemento){

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
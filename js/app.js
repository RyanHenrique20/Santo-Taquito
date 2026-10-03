const params = new URLSearchParams(window.location.search);

switch (params.get("menu")) {

    case "entradas":
        const entradas = document.getElementsByClassName('btn-menu')[1];
        entradas.style.color = "#FFF4D6";
        entradas.style.backgroundColor = "#C0392B";
        document.getElementsByClassName('grupo')[1].style.display = 'none';
        document.getElementsByClassName('grupo')[2].style.display = 'none';
        document.getElementsByClassName('grupo')[3].style.display = 'none';
        break;
    case "tacos":
        const tacos = document.getElementsByClassName('btn-menu')[2];
        tacos.style.color = "#FFF4D6";
        tacos.style.backgroundColor = "#C0392B";
        document.getElementsByClassName('grupo')[0].style.display = 'none';
        document.getElementsByClassName('grupo')[2].style.display = 'none';
        document.getElementsByClassName('grupo')[3].style.display = 'none';
        break;
    case "burritos":
        const burritos = document.getElementsByClassName('btn-menu')[3];
        burritos.style.color = "#FFF4D6";
        burritos.style.backgroundColor = "#C0392B";
        document.getElementsByClassName('grupo')[0].style.display = 'none';
        document.getElementsByClassName('grupo')[1].style.display = 'none';
        document.getElementsByClassName('grupo')[3].style.display = 'none';
        break;

    case "sobremesas":
        const sobremesas = document.getElementsByClassName('btn-menu')[4];
        sobremesas.style.color = "#FFF4D6";
        sobremesas.style.backgroundColor = "#C0392B";
        document.getElementsByClassName('grupo')[0].style.display = 'none';
        document.getElementsByClassName('grupo')[1].style.display = 'none';
        document.getElementsByClassName('grupo')[3].style.display = 'none';
        break;

    case "bebidas" : 
        const bebidas = document.getElementsByClassName('btn-menu')[5];
        bebidas.style.color = "#FFF4D6";
        bebidas.style.backgroundColor = "#C0392B"
         document.getElementsByClassName('grupo')[0].style.display = 'none';
        document.getElementsByClassName('grupo')[1].style.display = 'none';
        document.getElementsByClassName('grupo')[2].style.display = 'none';
        break;
    
    default:
        const todos = document.getElementsByClassName('btn-menu')[0];
        todos.style.color = "#FFF4D6";
        todos.style.backgroundColor = "#C0392B";
        break;
}


var traco = document.getElementById('xburguer')
var menu = document.querySelector('.menu')
var body = document.body;
var drk = document.getElementById('drkToggle')

// função de busca/pesquisa

function buscar() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let secoes = document.getElementsByClassName('secaoSumida');

    for (let i = 0; i < secoes.length; i++) {
        // Procura o h1 dentro da seção
        let titulo = secoes[i].querySelector('h1');
        let textoTitulo = titulo ? titulo.textContent.toLowerCase() : "";

        if (input === "") {
            secoes[i].style.display = "none";
        } else if (textoTitulo.includes(input)) {
            secoes[i].style.display = "block";
        } else {
            secoes[i].style.display = "none";
        }
    }
}

// Verifica o estado do modo escuro ao carregar a página

window.onload = function() {
    if (localStorage.getItem('modoEscuro') === 'true') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    mostraSecao('index'); 
};

// expande o menu

traco.addEventListener('click', function() {
menu.classList.toggle('grande')

})

// faz o modo escuro funcionar

drk.addEventListener('click', function(){
body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        localStorage.setItem('modoEscuro', 'true');
    } else {
        localStorage.setItem('modoEscuro', 'false');
    }

});


 // Scroll suave para a seção alvo ao clicar no botão 

    document.getElementById('Button0').addEventListener('click', function () {
      mostraSecao('lp');
    });


    document.getElementById('Button1').addEventListener('click', function () {
      mostraSecao('Site');
    });

    
    document.getElementById('Button2').addEventListener('click', function () {
      mostraSecao('so');
    });


    // qual seçao aparece
       function mostraSecao(sId) {
        document.querySelectorAll('.secaoSumida').forEach(sec => sec.classList.remove('selecionada'));
        document.getElementById(sId).classList.add('selecionada');
    }
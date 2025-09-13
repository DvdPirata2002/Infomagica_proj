
var traco = document.getElementById('xburguer')
var menu = document.querySelector('.menu')
var body = document.body;
var drk = document.getElementById('drkToggle')

// função de busca/pesquisa
function buscar() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let secoes = document.getElementsByClassName('secaoSumida');
    let primeiroEncontrado = null; 

    document.querySelectorAll('.topico').forEach(topico => {
        topico.classList.remove('ativo');
    });

    for (let i = 0; i < secoes.length; i++) {
        let pesquisas = secoes[i].getElementsByClassName('pesquisa');
        let encontrou = false;
        let topicoParaAbrir = null;

        for (let j = 0; j < pesquisas.length; j++) {
            let texto = pesquisas[j].textContent.toLowerCase();
            if (texto.includes(input)) {
                encontrou = true; 
                topicoParaAbrir = pesquisas[j].closest('.topico');
                encontrou = true;
                if (!primeiroEncontrado) {
                    primeiroEncontrado = pesquisas[j];
                }
            }
        }
        if (input === "") {
            secoes[i].classList.remove('selecionada');
        } else if (encontrou) {
            secoes[i].classList.add('selecionada');
            if (!primeiroEncontrado) {
                primeiroEncontrado = secoes[i];
            }
            if (topicoParaAbrir) {
                topicoParaAbrir.classList.add('ativo');
                setTimeout(function() {
                    topicoParaAbrir.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 50);
            }
        } else {
            secoes[i].classList.remove('selecionada');
        }
    }

    if (primeiroEncontrado) {
       setTimeout(function() {
        primeiroEncontrado.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50); 
    }
}


// Verifica o estado do modo escuro ao carregar a página

window.onload = function() {
    if (localStorage.getItem('modoEscuro') === 'true') {
        body.classList.add('dark');
        menu.classList.add('dark');
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
menu.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        localStorage.setItem('modoEscuro', 'true');
    } else {
        localStorage.setItem('modoEscuro', 'false');
    }

});


 // mostrar seções

    document.getElementById('Button0').addEventListener('click', function () {
      mostraSecao('lp');
    });


    document.getElementById('Button1').addEventListener('click', function () {
      mostraSecao('site');
    });

    document.getElementById('Button2').addEventListener('click', function () {
      mostraSecao('so');
    });

    document.getElementById('Button4').addEventListener('click', function () {
      mostraSecao('md');
    });

    document.getElementById('Button5').addEventListener('click', function () {
      mostraSecao('mm');
    });

    document.getElementById('Button6').addEventListener('click', function () {
      mostraSecao('bd');
    });

    document.getElementById('Button7').addEventListener('click', function () {
      mostraSecao('RC');
    });

    document.getElementById('Logo').addEventListener('click', function () {
    mostraSecao('index');
    });


    // qual seçao aparece
function mostraSecao(sId) {
    document.getElementById('searchInput').value = "";
    document.querySelectorAll('.secaoSumida').forEach(sec => sec.classList.remove('selecionada'));
    document.getElementById(sId).classList.add('selecionada');
    document.querySelectorAll('.topico').forEach(topico => topico.classList.remove('ativo'));
}

    // lançe que faz os topicos abrirem e fecharem
    document.querySelectorAll('.topico-cabecalho').forEach(cabecalho => {
        cabecalho.addEventListener('click', () => {
    
        const topico = cabecalho.closest('.topico');
        topico.classList.toggle('ativo');
  });
});








//-------------------------PARTE DO QUIZ------------------------------
let numeroSecao=0




    document.getElementById('1').addEventListener('click', function () {
numeroSecao = numeroSecao + 1
mostraPergunta(numeroSecao);


    });


    document.getElementById('2').addEventListener('click', function () {
numeroSecao = numeroSecao + 1
mostraPergunta(numeroSecao);


    });

    
    document.getElementById('3').addEventListener('click', function () {
numeroSecao = numeroSecao + 1
mostraPergunta(numeroSecao);


    });

    
    document.getElementById('4').addEventListener('click', function () {
numeroSecao = numeroSecao + 1
mostraPergunta(numeroSecao);


    });

    
    document.getElementById('5').addEventListener('click', function () {
numeroSecao = numeroSecao + 1
mostraPergunta(numeroSecao);


    });







function mostraPergunta(sId) {
    document.querySelectorAll('.secaoSumida').forEach(sec => sec.classList.remove('selecionada'));
    document.getElementById(sId).classList.add('selecionada');

}
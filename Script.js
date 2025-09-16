
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





function buscar2() {
    let input = document.getElementById('searchInput2').value.toLowerCase();
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

    
};

// expande o menu

traco.addEventListener('click', function() {
menu.classList.toggle('grande')

})

// faz o modo escuro funcionar

drk.addEventListener('click', function(){
    body.classList.toggle('dark');
    menu.classList.toggle('dark');

    document.querySelectorAll('.icone').forEach(function(img) {
        if (body.classList.contains('dark')) {
            img.src = img.src.replace(/(IMG\/)([^.]+)\.png/, '$1$2-B.png');
        } else {
            img.src = img.src.replace(/(IMG\/)([^.]+)-B\.png/, '$1$2.png');
        }
    });

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
      mostraSecao('rc');
    });

    document.getElementById('Logo').addEventListener('click', function () {
    mostraSecao('index');
    });



function mostraSecao(sId) {

    if (document.getElementById('searchInput')) {
        document.getElementById('searchInput').value = "";
    }
    if (document.getElementById('searchInput2')) {
        document.getElementById('searchInput2').value = "";
    }
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
let java = 0;
let python = 0;
let javascript = 0;
let kotlin = 0;
let c = 0;

function pontuacaodoquiz(pid, rid) {
    switch (pid) {
        case "pergunta1":
            switch (rid) {
                case "1":
                    java=java + 2;
                    C = C + 3;
                    break;
                case "2":
                    javascript++;java++;
                    break;
                case "3":
                    javascript = javascript + 2;
                    python++;
                    break;
                case "4":
                    python=python + 2;
                    break;
                case "5":
                    kotlin=kotlin + 2;
                    break;
            }
            break;
        case "pergunta2":
             switch (rid) {
                case "1":
                    javascript=javascript + 2;
                    break;
                case "2":
                    java++;
                    break;
                case "3":
                    java=java + 2; kotlin++;
                    break;
                case "4":
                    kotlin=kotlin + 2; python=python + 2;
                    break;
                case "5":
                    c=c + 2; python++;
                    break;
            }
            break;
        case "pergunta3":
               switch (rid) {
                case "1":
                    python=python + 2; java=java + 2;
                    break;
                case "2":
                    python++; kotlin=kotlin + 2; java++; javascript++; 
                    break;
                case "3":
                    kotlin++; javascript=javascript + 2;
                    break;
                case "4":
                    c++;
                    break;
                case "5":
                    c=c + 2;
                    break;
            }
            break;
        case "pergunta4":
                        switch (rid) {
                case "1":
                     java=java + 2;
                    break;
                case "2":
                      java++; 
                    break;
                case "3":
                    c=c + 2;  python++;
                    break;
                case "4":
                    python=python + 2; kotlin++; javascript++;
                    break;
                case "5":
                   kotlin=kotlin + 2;javascript=javascript + 2; 
                    break;
            }
            break;
        case "pergunta5":
                        switch (rid) {
                case "1":
                  javascript=javascript + 2; python=python + 2;
                            kotlin++; 
                    break;
                case "2":
                    python++; kotlin=kotlin + 2; javascript++;
                    break;
                case "3":
                           java=java + 2;  
                    break;
                case "4":
                    java++;
                    break;
                case "5":
                    c=c + 2;
                    break;
            }
            break;
        case "pergunta6":
                        switch (rid) {
                case "1":
                   python=python + 2; c=c + 2;
                    break;
                case "2":
                    python++; 
                   
                    break;
                case "3":
                    kotlin++; javascript=javascript + 2;
                    break;
                case "4":
                    c++;
                    break;
                case "5":
                   javascript=javascript + 2;

                    break;
            }
            break;
        case "pergunta7":
                        switch (rid) {
                case "1":
                    python=python + 2; java=java + 2;
                    break;
                case "2":
                    python++; kotlin=kotlin + 2; java++; javascript++; 
                    break;
                case "3":
                    kotlin++; javascript=javascript + 2;
                    break;
                case "4":
                    c++;
                    break;
                case "5":
                    c=c + 2;
                    break;
            }
            break;

            case "pergunta8":
                            switch (rid) {
                case "1":
                    python=python + 2; java=java + 2;
                    break;
                case "2":
                    python++; kotlin=kotlin + 2; java++; javascript++; 
                    break;
                case "3":
                    kotlin++; javascript=javascript + 2;
                    break;
                case "4":
                    c++;
                    break;
                case "5":
                    c=c + 2;
                    break;
            }
            break;
            case "pergunta9":
                            switch (rid) {
                case "1":
                    python=python + 2; java=java + 2;
                    break;
                case "2":
                    python++; kotlin=kotlin + 2; java++; javascript++; 
                    break;
                case "3":
                    kotlin++; javascript=javascript + 2;
                    break;
                case "4":
                    c++;
                    break;
                case "5":
                    c=c + 2;
                    break;
            }
            break;
            case "pergunta10":
                            switch (rid) {
                case "1":
                    python=python + 2; java=java + 2;
                    break;
                case "2":
                    python++; kotlin=kotlin + 2; java++; javascript++; 
                    break;
                case "3":
                    kotlin++; javascript=javascript + 2;
                    break;
                case "4":
                    c++;
                    break;
                case "5":
                    c=c + 2;
                    break;
            }
            break;

    }
}
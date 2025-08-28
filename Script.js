
var traco = document.getElementById('xburguer')
var menu = document.querySelector('.menu')
var body = document.body;
var drk = document.getElementById('drkToggle')

// Verifica o estado do modo escuro ao carregar a página

window.onload = function() {
    if (localStorage.getItem('modoEscuro') === 'true') {
        body.classList.add('dark');
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

    if (body.classList.contains('dark')) {
        localStorage.setItem('modoEscuro', 'true');
    } else {
        localStorage.setItem('modoEscuro', 'false');
    }

});


 // Scroll suave para a seção alvo ao clicar no botão 


    document.getElementById('scrollButton0').addEventListener('click', function () {
      document.getElementById('lp').scrollIntoView({ behavior: 'smooth' });
    });


    document.getElementById('scrollButton1').addEventListener('click', function () {
      document.getElementById('Site').scrollIntoView({ behavior: 'smooth' });
    });

    
    document.getElementById('scrollButton2').addEventListener('click', function () {
      document.getElementById('bd').scrollIntoView({ behavior: 'smooth' });
    });
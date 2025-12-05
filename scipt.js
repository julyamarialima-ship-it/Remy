

document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.btn-proximo');

   
    if (!botoes || botoes.length === 0) return;

    botoes.forEach(button => {
        button.addEventListener('click', function (evt) {
            evt.preventDefault();

            const atual = document.querySelector('.passo.ativo');
           
            const target = String(this.getAttribute('data-proximo'));
            const proximoId = 'passo-' + target;

           
            const proximo = document.getElementById(proximoId);

            if (!proximo) {

                console.warn('Alvo não encontrado:', proximoId);
                return;
            }

            
            if (atual) {
                atual.classList.remove('ativo');
            }

            
            proximo.classList.add('ativo');

            
            proximo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

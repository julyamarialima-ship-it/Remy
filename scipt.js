// script.js
// Transição entre passos (protegido contra IDs inexistentes)

document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.btn-proximo');

    // Se não houver nenhum botão, não faz nada
    if (!botoes || botoes.length === 0) return;

    botoes.forEach(button => {
        button.addEventListener('click', function (evt) {
            evt.preventDefault();

            const atual = document.querySelector('.passo.ativo');
            // pega o valor do data-proximo (por segurança convertemos para string)
            const target = String(this.getAttribute('data-proximo'));
            const proximoId = 'passo-' + target;

            // procura o elemento alvo
            const proximo = document.getElementById(proximoId);

            if (!proximo) {
                // mensagem de debug para console (não quebra a aplicação)
                console.warn('Alvo não encontrado:', proximoId);
                return;
            }

            // remove a classe .ativo do atual (se existir)
            if (atual) {
                atual.classList.remove('ativo');
            }

            // adiciona .ativo no próximo
            proximo.classList.add('ativo');

            // opcional: rolar até o topo do main para manter foco visual
            proximo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

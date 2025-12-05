document.addEventListener('DOMContentLoaded', function () {
  // Inicialização robusta: remove .ativo de todos e ativa apenas passo-0
  const passos = document.querySelectorAll('.passo');
  passos.forEach(p => p.classList.remove('ativo'));

  const inicial = document.getElementById('passo-0');
  if (inicial) inicial.classList.add('ativo');

  // Seleciona todos os botões
  const botoes = document.querySelectorAll('.btn-proximo');
  if (!botoes || botoes.length === 0) {
    console.info('Nenhum botão .btn-proximo encontrado.');
    return;
  }

  botoes.forEach(button => {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();

      // localiza passo atual
      const atual = document.querySelector('.passo.ativo');

      // extrai valor de data-proximo: permite que exista texto sujo, extrai apenas dígitos
      const raw = String(this.getAttribute('data-proximo') || '');
      const digits = raw.match(/\d+/);
      if (!digits) {
        console.warn('data-proximo inválido no botão:', this, 'valor:', raw);
        return;
      }
      const targetNum = digits[0];
      const proximoId = 'passo-' + targetNum;
      const proximo = document.getElementById(proximoId);

      if (!proximo) {
        console.warn('Elemento alvo não encontrado:', proximoId);
        return;
      }

      // remove .ativo de todos (garante não haver múltiplos ativos)
      document.querySelectorAll('.passo.ativo').forEach(el => el.classList.remove('ativo'));

      // adiciona .ativo no próximo
      proximo.classList.add('ativo');

      // rola suavemente para o próximo passo (melhora experiência)
      proximo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
});

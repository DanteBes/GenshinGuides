const btnSvg = document.getElementById('info_svg-btn');

const info__block_none = document.getElementById('info__block-none');

btnSvg.addEventListener('click', () => {
  btnSvg.classList.toggle('info__block-none');
});
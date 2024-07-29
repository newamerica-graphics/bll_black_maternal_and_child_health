import './index.scss';

const settings = {
  'viz__id': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("script")
    target.src = "https://new-america.shorthandstories.com/b8e00597-b569-499d-b88d-76e5b9d5565e/embed.js"
    el.appendChild(target)
  }
};


window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;
  chart(el);
}

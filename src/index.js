import './index.scss';

const settings = {
  'viz__id': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    let target = document.createElement("script")
    target.src = "https://juliacraven.shorthandstories.com/black-maternal-and-child-health/embed.js"
    el.appendChild(target)
  }
};


window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;
  chart(el);
}

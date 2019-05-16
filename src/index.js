import '../dist/styles/drawing_pad.css';
// import './styles/medium_selector.css';

document.addEventListener('DOMContentLoaded', () => {
  const canvasDiv = document.getElementById('canvasDiv');
  const canvas = document.createElement('canvas');
  // const mediumSelector = document.getElementById('mediumSelector');
  canvas.setAttribute('width', 800);
  canvas.setAttribute('height', 520);
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);

  if (typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }

  const ctx = canvas.getContext('2d');
});

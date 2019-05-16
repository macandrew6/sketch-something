import DrawingPad from './components/drawing_pad';

document.addEventListener('DOMContentLoaded', () => {
  const canvasDiv = document.getElementById('canvasDiv');
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', 800);
  canvas.setAttribute('height', 520);
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);

  if (typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }
  const ctx = canvas.getContext('2d');
   
  new DrawingPad(ctx);
});

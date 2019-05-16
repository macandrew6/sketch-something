import '../../dist/styles/drawing_pad.css';

// const createCanvas = () => {
//   const canvasDiv = document.getElementById('canvasDiv');
//   const canvas = document.createElement('canvas');
//   canvas.setAttribute('width', 800);
//   canvas.setAttribute('height', 520);
//   canvas.setAttribute('id', 'canvas');
//   canvasDiv.appendChild(canvas);

//   if (typeof G_vmlCanvasManager != 'undefined') {
//     canvas = G_vmlCanvasManager.initElement(canvas);
//   }
//   const ctx = canvas.getContext('2d');

//   let painting = false;

//   const startPosition = (e) => {
//     painting = true;
//     draw(e);
//   };

//   const endPosition = () => {
//     painting = false;
//     ctx.beginPath();
//   };

//   const draw = (e) => {
//     const rect = canvas.getBoundingClientRect();
//     if (!painting) return;
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = '#F5F6F5';
//     ctx.lineCap = 'square';

//     ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
//   };

//   canvas.addEventListener("mousedown", startPosition);
//   canvas.addEventListener("mouseup", endPosition);
//   canvas.addEventListener("mousemove", draw);
// };

class DrawingPad {
  constructor(ctx) {
    this.painting = false;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.startPosition = this.startPosition.bind(this);
    this.endPosition = this.endPosition.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.startPosition);
    this.ctx.canvas.addEventListener("mouseup", this.endPosition);
    this.ctx.canvas.addEventListener("mousemove", this.draw);
  }

  startPosition(e) {
    this.painting = true;
    this.draw(e);
  }

  endPosition() {
    this.painting = false;
    this.ctx.beginPath();
  }

  draw(e) {
    const rect = this.ctx.canvas.getBoundingClientRect();
    if (!this.painting) return;
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#F5F6F5';
    this.ctx.lineCap = 'round';

    this.ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }
}

export default DrawingPad;
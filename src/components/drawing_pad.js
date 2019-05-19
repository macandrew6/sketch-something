import '../../dist/styles/drawing_pad.css';

class DrawingPad {
  constructor() {
    // making it compatible for IE lol!
    this.canvasDiv = document.getElementsByClassName('canvas-div')[0];
    this.canvas = document.createElement('canvas');
    this.saveButton = document.getElementById('save-button');
    this.canvas.setAttribute('width', 800);
    this.canvas.setAttribute('height', 520);
    this.canvas.setAttribute('class', 'canvas');
    this.canvasDiv.appendChild(this.canvas);

    if (typeof window.G_vmlCanvasManager !== 'undefined') {
      this.canvas = window.G_vmlCanvasManager.initElement(this.canvas);
    }
    // ends here
    this.ctx = this.canvas.getContext('2d');
    
    const background = new Image();
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    };
    background.src = '/dist/images/164077250-blackboard-wallpapers.jpg';

    this.painting = false;
    this.draw = this.draw.bind(this);
    this.startPosition = this.startPosition.bind(this);
    this.endPosition = this.endPosition.bind(this);
    this.save = this.save.bind(this);
    this.canvas.addEventListener("mousedown", this.startPosition);
    this.canvas.addEventListener("mouseup", this.endPosition);
    this.canvas.addEventListener("mousemove", this.draw);
    this.saveButton.addEventListener('click', this.save);
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
    const rect = this.canvas.getBoundingClientRect();
    if (!this.painting) return;
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#F5F6F5';
    this.ctx.lineCap = 'round';

    this.ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  save(e) {
    const savedCanvas = this.canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.setAttribute('download', 'exmple.png');
    link.setAttribute('href', savedCanvas);
    link.click();
  }
  
}

export default DrawingPad;
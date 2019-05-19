class ColorSelector {
  constructor() {
    this.colorSelectorDiv = document.getElementById('color-selector-canvas-div');
    this.colorCanvas = document.createElement('canvas');
    this.colorCanvas.setAttribute('class', 'color-canvas');
    this.colorSelectorDiv.appendChild(this.colorCanvas);
    if (typeof window.G_vmlCanvasManager !== 'undefined') {
      this.colorCanvas = window.G_vmlCanvasManager.initElement(this.colorCanvas);
    }
    this.colorCtx = this.colorCanvas.getContext('2d');
    
    this.getColor = this.getColor.bind(this);
    this.buildColorPalette();
    this.colorCanvas.addEventListener('mousedown', this.startSetColor);
    this.colorCanvas.addEventListener('mouseup', this.endSetColor);
  }

  buildColorPalette() {
    let gradient = this.colorCtx.createLinearGradient(20, 0, this.colorCanvas.width, 0);

    gradient.addColorStop(0, "rgb(255,   0,   0)");
    gradient.addColorStop(0.15, "rgb(255,   0, 255)");
    gradient.addColorStop(0.33, "rgb(0,     0, 255)");
    gradient.addColorStop(0.49, "rgb(0,   255, 255)");
    gradient.addColorStop(0.67, "rgb(0,   255,   0)");
    gradient.addColorStop(0.84, "rgb(255, 255,   0)");
    gradient.addColorStop(1, "rgb(255,   0,   0)");

    this.colorCtx.fillStyle = gradient;
    this.colorCtx.fillRect(0, 0, this.colorCtx.canvas.width, this.colorCtx.canvas.height);

    gradient = this.colorCtx.createLinearGradient(0, 0, 0, this.colorCanvas.height);

    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
    gradient.addColorStop(1, "rgba(0,     0,   0, 1)");

    this.colorCtx.fillStyle = gradient;
    this.colorCtx.fillRect(0, 0, this.colorCtx.canvas.width, this.colorCtx.canvas.height);
  }

  startSetColor(e) {
    e.stopPropagation();
    console.log(this);
    const rect = this.getBoundingClientRect();
    this.addEventListener('mousemove', e => {
      this.colorEventX = e.clientX - rect.left;
      this.colorEventY = e.clientY - rect.top;
      console.log(this.colorEventX, this.colorEventY);
    });

    // this.colorTimer = setInterval(this.getColor, 50);
  }

  endSetColor(e) {
    e.stopPropagation();
    this.savedColorX = this.colorEventX;
    this.savedColorY = this.colorEventY;

    console.log("saved X Y ",this.savedColorX, this.savedColorY);
  }

  getColor() {

  }
}

export default ColorSelector;
import MediumSelector from "./medium_selector";

class ColorSelector {
  constructor() {
    this.mediumSelector = new MediumSelector();
    this.mediumControls = document.getElementsByClassName('medium-controls-container')[0];
    this.rgbValue = document.getElementById('rgb-value');
    this.colorCanvas = document.getElementById('color-selector-canvas-div');
    this.colorCtx = this.colorCanvas.getContext('2d');
    this.picking = false;

    this.buildColorPalette();
    this.startColorCoords = this.startColorCoords.bind(this);
    this.endColorCoords = this.endColorCoords.bind(this);
    this.colorPick = this.colorPick.bind(this);
    this.colorCanvas.addEventListener('mousedown', this.startColorCoords);
    this.colorCanvas.addEventListener('mouseup', this.endColorCoords);
    this.colorCanvas.addEventListener('mousemove', this.colorPick);
  }

  buildColorPalette() {
    let gradient = this.colorCtx.createLinearGradient(0, 0, this.colorCanvas.width, 0);

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

  startColorCoords(e) {
    e.stopPropagation();
    e.preventDefault();
    this.colorEventX = e.layerX;
    this.colorEventY = e.layerY;
    this.picking = true;
  }

  endColorCoords(e) {
    this.mediumSelector.clearCanvas();

    e.stopPropagation();
    e.preventDefault();
    this.picking = false;
    this.mediumSelector.drawCurrentBrush();

  }

  colorPick(e) {
    if (!this.picking) return;
    let x = event.layerX;
    let y = event.layerY;
    let pixel = this.colorCtx.getImageData(x, y, 1, 1);
    window.rgb = 'rgb(' + pixel.data[0] + ', ' + pixel.data[1] +
      ', ' + pixel.data[2] + ')';
    this.mediumControls.setAttribute('style', `box-shadow: 0px 0px 30px 10px ${window.rgb} inset;`);
    this.rgbValue.style.background = window.rgb;
    this.rgbValue.textContent = window.rgb;
  }
}

export default ColorSelector;
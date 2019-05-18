class ColorSelector {
  constructor() {
    this.colorSelectorDiv = document.getElementById('color-selector-canvas-div');
    this.colorCanvas = document.createElement('canvas');
    this.colorCanvas.setAttribute('width', 200);
    this.colorCanvas.setAttribute('height', 100);
    this.colorCanvas.setAttribute('id', 'color-canvas');
    this.colorSelectorDiv.appendChild(this.colorCanvas);
    if (typeof window.G_vmlCanvasManager !== 'undefined') {
      this.colorCanvas = window.G_vmlCanvasManager.initElement(this.colorCanvas);
    }
    this.colorCtx = this.colorCanvas.getContext('2d');
  }
}

export default ColorSelector;
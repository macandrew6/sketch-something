class MediumSelector {
  constructor() {
    // have a value for custom medium
    // this.currentMedium = new Image();

    this.fileChooser = document.getElementsByClassName('file-chooser')[0];
    this.smallMedium = document.getElementById('small');
    this.mediumMedium = document.getElementById('medium');
    this.largeMedium = document.getElementById('large');
    this.xlargeMedium = document.getElementById('x-large');
    this.currentBrush = document.getElementById('current-brush-canvas');
    this.currentBrush.setAttribute('width', 60);
    this.currentBrush.setAttribute('height', 60);
    this.customMediumCanvas = document.getElementById('custom-medium-selector-canvas');
    this.customMediumCanvas.setAttribute('width', 500);
    this.customMediumCanvas.setAttribute('height', 200);
    this.customMediumCanvas.setAttribute('class', 'custom-medium-canvas');

    this.currBrushCtx = this.currentBrush.getContext('2d');
    this.customMediumCtx = this.customMediumCanvas.getContext('2d');

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.loadAndDrawImage = this.loadAndDrawImage.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.fileChooser.addEventListener('change', this.handleFileSelect, false);
    this.smallMedium.addEventListener('click', this.handleSizeChange);
    this.mediumMedium.addEventListener('click', this.handleSizeChange);
    this.largeMedium.addEventListener('click', this.handleSizeChange);
    this.xlargeMedium.addEventListener('click', this.handleSizeChange);
  }

  drawCurrentBrush() {
    this.currBrushCtx.lineWidth = window.mediumSize;
    this.currBrushCtx.strokeStyle = window.rgb;
    this.currBrushCtx.lineCap = 'round';
    this.currBrushCtx.lineTo(30, 30);
    this.currBrushCtx.stroke();
  }

  handleSizeChange(e) {
    e.preventDefault();
    this.clearCanvas();
    if (e.target.value === 'x-small'){
      window.mediumSize = 1;
    } else if (e.target.value === 'small') {
      window.mediumSize = 3;
    } else if (e.target.value === 'medium') {
      window.mediumSize = 7;
    } else if (e.target.value === 'large') {
      window.mediumSize = 11;
    } else if (e.target.value === 'x-large') {
      window.mediumSize = 18;
    }
    this.drawCurrentBrush();
  }

  clearCanvas(e) {
    this.currBrushCtx.clearRect(
      0,
      0,
      this.currBrushCtx.canvas.width,
      this.currBrushCtx.canvas.height
    );
  }

  handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();
    let files = e.target.files;
    if (!files.length) return;
    let file = files[0];
    if (file.type !== '' && !file.type.match('image.*')) return;

    window.URL = window.URL || window.webkitURL;

    let imageURL = window.URL.createObjectURL(file);
    
    this.loadAndDrawImage(imageURL)();
  }

  loadAndDrawImage(imageURL) {
    return e => {
      // e.stopPropagation();
      const newMedium = new Image();
      newMedium.src = imageURL;
      newMedium.onload = () => {
        this.customMediumCtx.drawImage(
          newMedium,
          0, 
          0, 
          50,
          50
        );
      };
    };
  }
}

export default MediumSelector;
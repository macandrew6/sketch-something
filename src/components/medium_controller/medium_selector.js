class MediumSelector {
  constructor() {
    // have a value for custom medium

    this.fileChooser = document.getElementsByClassName('file-chooser')[0];
    this.xsmallMedium = document.getElementById('x-small');
    this.smallMedium = document.getElementById('small');
    this.mediumMedium = document.getElementById('medium');
    this.largeMedium = document.getElementById('large');
    this.xlargeMedium = document.getElementById('x-large');
    this.xxlargeMedium = document.getElementById('xx-large');
    this.currentBrush = document.getElementById('current-brush-canvas');
    this.currentBrush.setAttribute('width', 60);
    this.currentBrush.setAttribute('height', 60);
    // divide custom medium canvas into 10 different cells

    this.currBrushCtx = this.currentBrush.getContext('2d');

    this.mediumSize = 1;
    this._customMediumImages = [];

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.loadAndDrawImage = this.loadAndDrawImage.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.currentMediumState = this.currentMediumState.bind(this);
    this.fileChooser.addEventListener('change', this.handleFileSelect);
    this.xsmallMedium.addEventListener('click', this.handleSizeChange);
    this.smallMedium.addEventListener('click', this.handleSizeChange);
    this.mediumMedium.addEventListener('click', this.handleSizeChange);
    this.largeMedium.addEventListener('click', this.handleSizeChange);
    this.xlargeMedium.addEventListener('click', this.handleSizeChange);
    this.xxlargeMedium.addEventListener('click', this.handleSizeChange);
  }

  drawCurrentBrush(e) {
    console.log(this.currentCustomMediumImage);
    if (this.currentCustomMediumImage) {
      this.currBrushCtx.drawImage(
        this.currentCustomMediumImage,
        5,
        5,
        50,
        50
      );
    } else {
      this.currBrushCtx.lineWidth = window.mediumSize;
      this.currBrushCtx.strokeStyle = window.rgb;
      this.currBrushCtx.lineCap = 'round';
      this.currBrushCtx.lineTo(30, 30);
      this.currBrushCtx.stroke();
    }
  }

  currentMediumState() {
    if (this.currentCustomMedium === undefined) return;
    const selectedCustomMedium = this.currentCustomMedium;

    selectedCustomMedium.onload = () => {
      this.currBrushCtx.drawImage(
        selectedCustomMedium,
        0,
        0,
        this.currentBrush.width,
        this.currentBrush.height
      );
    };
  }

  handleSizeChange(e) {
    e.preventDefault();
    this.clearCanvas();
    if (e.target.value === 'x-small') {
      window.mediumSize = 1;
    } else if (e.target.value === 'small') {
      window.mediumSize = 3;
    } else if (e.target.value === 'medium') {
      window.mediumSize = 7;
    } else if (e.target.value === 'large') {
      window.mediumSize = 11;
    } else if (e.target.value === 'x-large') {
      window.mediumSize = 18;
    } else if (e.target.value === 'xx-large') {
      window.mediumSize = 25;
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
    let files = e.target.files;
    if (!files.length) return;
    let file = files[0];
    if (file.type !== '' && !file.type.match('image.*')) return;

    window.URL = window.URL || window.webkitURL;

    let imageURL = window.URL.createObjectURL(file);
    console.log('hey im being envoked twice?');
    this.createImageSelectButton(imageURL);
  }

  createImageSelectButton(imageDataURL) {
    const image = document.createElement('img');
    image.src = imageDataURL;
    // append to custom medium grid instead of body
    image.classList.add('custom-medium-select-button');
    document.getElementById('custom-medium-selector-div').appendChild(image);
    let imageIndex = this._customMediumImages.length;
    this._customMediumImages.push(image);
  
    console.log('inside createImageSelectButton', image);
    image.addEventListener('click', () => {
      console.log('image being clicked');
      debugger;
      this.currentCustomMediumImage = this._customMediumImages[imageIndex];
      this.drawCurrentBrush();
    });
  }

  loadAndDrawImage(imageURL) {
    return e => {
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
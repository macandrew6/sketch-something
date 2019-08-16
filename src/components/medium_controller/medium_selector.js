class MediumSelector {
  constructor() {
    this.roundMedium = document.getElementsByClassName('standard-medium round')[0];
    this.squareMedium = document.getElementsByClassName('standard-medium square')[0];
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

    this.currBrushCtx = this.currentBrush.getContext('2d');

    this.roundMediumCtx = this.roundMedium.getContext('2d');
    this.roundMedium.setAttribute('width', 30);
    this.roundMedium.setAttribute('height', 30);
    this.squareMediumCtx = this.squareMedium.getContext('2d');
    this.squareMedium.setAttribute('width', 30);
    this.squareMedium.setAttribute('height', 30);
    this.drawRoundMedium();
    this.drawSquareMedium();

    this.mediumSize = 2;
    this.rgb = 'rgb(0, 0, 0)';
    this.lineCap = 'round';
    this._customMediumImages = [];

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleLineCap = this.handleLineCap.bind(this);
    this.fileChooser.addEventListener('change', this.handleFileSelect);
    this.roundMedium.addEventListener('click', this.handleLineCap);
    this.squareMedium.addEventListener('click', this.handleLineCap);
    this.xsmallMedium.addEventListener('click', this.handleSizeChange);
    this.smallMedium.addEventListener('click', this.handleSizeChange);
    this.mediumMedium.addEventListener('click', this.handleSizeChange);
    this.largeMedium.addEventListener('click', this.handleSizeChange);
    this.xlargeMedium.addEventListener('click', this.handleSizeChange);
    this.xxlargeMedium.addEventListener('click', this.handleSizeChange);
  }

  drawRoundMedium() {
    this.roundMediumCtx.lineWidth = 10;
    this.roundMediumCtx.lineCap = 'round';
    this.roundMediumCtx.lineTo(15, 15);
    this.roundMediumCtx.stroke();
  }

  drawSquareMedium() {
    this.squareMediumCtx.lineWidth = 10;
    this.squareMediumCtx.lineCap = 'square';
    this.squareMediumCtx.lineTo(15, 15);
    this.squareMediumCtx.stroke();
  }

  handleLineCap(e) {
    console.log('im here baby', e.target.classList[1]);
    e.preventDefault();
    if (e.target.classList[1] === 'square') {
      this.lineCap = 'square';
    } else if (e.target.classList[1] === 'round') {
      this.lineCap = 'round';
    }
    this.clearCanvas();
    this.currentCustomMediumImage = undefined;
    this.drawCurrentBrush();
  }

  drawCurrentBrush(e) {
    if (this.currentCustomMediumImage) {
      this.currBrushCtx.drawImage(
        this.currentCustomMediumImage,
        5,
        5,
        50,
        50
      );
    } else {
      this.currBrushCtx.lineWidth = this.mediumSize;
      this.currBrushCtx.strokeStyle = this.rgb;
      this.currBrushCtx.lineCap = this.lineCap;
      this.currBrushCtx.lineTo(30, 30);
      this.currBrushCtx.stroke();
    }
  }

  handleSizeChange(e) {
    e.preventDefault();
    this.clearCanvas();
    if (e.target.value === 'x-small') {
      this.mediumSize = 2;
    } else if (e.target.value === 'small') {
      this.mediumSize = 3;
    } else if (e.target.value === 'medium') {
      this.mediumSize = 7;
    } else if (e.target.value === 'large') {
      this.mediumSize = 11;
    } else if (e.target.value === 'x-large') {
      this.mediumSize = 18;
    } else if (e.target.value === 'xx-large') {
      this.mediumSize = 25;
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
    this.createImageSelectButton(imageURL);
  }

  createImageSelectButton(imageDataURL) {
    const image = document.createElement('img');
    image.src = imageDataURL;
    image.classList.add('custom-medium-select-button');
    document.getElementById('custom-medium-selector-div').appendChild(image);
    let imageIndex = this._customMediumImages.length;
    this._customMediumImages.push(image);
    
    image.addEventListener('click', () => {
      image.classList.add('custom-medium-selected');
      this.currentCustomMediumImage = this._customMediumImages[imageIndex];
      this.drawCurrentBrush();
    });
    image.classList.remove('custom-medium-selected');
  }
}

export default MediumSelector;
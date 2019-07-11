class MediumSelector {
  constructor() {
    this.fileChooser = document.getElementsByClassName('file-chooser')[0];
    this.smallMedium = document.getElementById('small');
    this.mediumMedium = document.getElementById('medium');
    this.largeMedium = document.getElementById('large');
    this.xlargeMedium = document.getElementById('x-large');
    this.customMediaSelectorDiv = document.getElementById('custom-medium-selector-canvas-div');
    this.customMediumCanvas = document.createElement('canvas');
    this.customMediumCanvas.setAttribute('width', 500);
    this.customMediumCanvas.setAttribute('height', 200);
    // this.customMediumCanvas.setAttribute('style', 'display: flex; justify-content: center;');
    this.customMediumCanvas.setAttribute('class', 'custom-medium-canvas');
    this.customMediaSelectorDiv.appendChild(this.customMediumCanvas);
    if (typeof window.G_vmlCanvasManager !== 'undefined') {
      this.customMediumCanvas = window.G_vmlCanvasManager.initElement(this.customMediumCanvas);
    }
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

  handleSizeChange(e) {
    e.preventDefault();
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

    this.loadAndDrawImage(imageURL);
  }

  loadAndDrawImage(imageURL) {
    return e => {
      e.stopPropagation();
      const newMedium = new Image();
      newMedium.src = imageURL;
      newMedium.onload = () => {
        this.customMediumCtx.drawImage(
          imageURL,
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
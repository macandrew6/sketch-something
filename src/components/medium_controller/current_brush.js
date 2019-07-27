class CurrentBrush {
  constructor(mediumSelector, colorSelector) {
    this.mediumSize = mediumSelector.mediumSize;
    this.currentCustomMediumImage = mediumSelector.currentCustomMediumImage;
    this.rgb = colorSelector.rgb;
    this.currentBrush = document.getElementById('current-brush-canvas');
    this.currentBrush.setAttribute('width', 60);
    this.currentBrush.setAttribute('height', 60);

    console.log('im running this function')

    this.currBrushCtx = this.currentBrush.getContext('2d');
  }

}

export default CurrentBrush;
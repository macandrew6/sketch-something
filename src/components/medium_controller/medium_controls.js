import ColorSelector from './color_selector';
import MediumSelector from './medium_selector';
import '../../../dist/styles/medium_selector.css';

class MediumControls {
  constructor() {
    this.colorSelector = new ColorSelector();
    this.mediumSelector = new MediumSelector();

    this.mediumControls = document.getElementsByClassName('medium-controls-container')[0];
    this.customMediaCanvas = document.getElementsByClassName('custom-medium-canvas')[0];
    this.mediumSizeControls = document.getElementsByClassName("medium-size-btn-container")[0];
    this.colorSelector = document.getElementsByClassName('color-canvas')[0];
    this.closeButton = document.getElementsByClassName('close-controls-btn')[0];
    this.currentBrush = document.getElementsByClassName('current-brush-container')[0];
    this.fileChooser = document.getElementsByClassName('file-chooser')[0];
    this.medium = document.getElementsByClassName('medium');
    this.mediumTitle = document.getElementsByClassName('medium-title')[0];
    this.body = document.querySelector('body');

    this.expandControls = this.expandControls.bind(this);
    this.closeControls = this.closeControls.bind(this);
    this.mediumControls.addEventListener('click', this.expandControls);
    this.closeButton.addEventListener('click', this.closeControls);
  }

  expandControls(e) {
    e.stopPropagation();
    this.closeButton.classList.add('show');
    for (let i = 0; i < this.medium.length; i++) {
      this.medium[i].classList.add('show');
    }
    this.mediumTitle.classList.add('hide');
    this.mediumControls.classList.add('expand');
    this.currentBrush.classList.add('move-current-brush-container');
    this.body.setAttribute('style','background: rgba(0, 0, 0, 0.5)');
  }

  closeControls(e) {
    e.stopPropagation();
    this.closeButton.classList.remove('show');
    for (let i = 0; i < this.medium.length; i++) {
      this.medium[i].classList.remove('show');
    }
    this.mediumTitle.classList.remove('hide');
    this.mediumControls.classList.remove('expand');
    this.currentBrush.classList.remove('move-current-brush-container');
    this.body.removeAttribute('style');
  }

}

export default MediumControls;
import ColorSelector from './color_selector';
import MediumSelector from './medium_selector';
import '../../../dist/styles/medium_selector.css';

class MediumControls {
  constructor() {
    this.colorSelector = new ColorSelector();
    // this.mediumSelector = new MediumSelector();

    this.drawingPad = document.getElementsByClassName('canvas')[0];
    this.title = document.getElementsByClassName('app-title')[0];
    this.buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    this.mediumControls = document.getElementsByClassName('medium-controls-container')[0];
    this.colorSelector = document.getElementsByClassName('color-canvas')[0];
    this.closeButton= document.getElementsByClassName('close-controls-btn')[0];
    this.body = document.querySelector('body');

    this.expandControls = this.expandControls.bind(this);
    this.closeControls = this.closeControls.bind(this);
    this.mediumControls.addEventListener('click', this.expandControls);
    this.closeButton.addEventListener('click', this.closeControls);
  }

  expandControls(e) {
    e.stopPropagation();

    this.title.classList.add('move');
    this.drawingPad.classList.add('move');
    this.buttonsContainer.classList.add('move');
    this.closeButton.classList.add('show');
    this.mediumControls.classList.add('expand');
    this.colorSelector.classList.add('expand-color');
    this.body.setAttribute('style','background: rgba(0, 0, 0, 0.5)');
  }

  closeControls(e) {
    e.stopPropagation();
    
    this.title.classList.remove('move');
    this.drawingPad.classList.remove('move');
    this.buttonsContainer.classList.remove('move');
    this.closeButton.classList.remove('show');
    this.mediumControls.classList.remove('expand');
    this.colorSelector.classList.remove('expand-color');
    this.body.removeAttribute('style');
  }
  
}

export default MediumControls;
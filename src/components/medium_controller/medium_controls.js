import ColorSelector from './color_selector';
import MediumSelector from './medium_selector';
import '../../../dist/styles/medium_selector.css';

class MediumControls {
  constructor() {
    this.drawingPad = document.getElementsByClassName('canvas-div')[0];
    this.title = document.getElementsByClassName('app-title')[0];
    this.buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    this.mediumControls = document.getElementsByClassName('medium-controls-container')[0];
    this.closeButton= document.getElementById('close-controls-btn');
    this.body = document.querySelector('body');

    new ColorSelector();
    new MediumSelector();
    this.closeControls = this.closeControls.bind(this);
    this.expandControls = this.expandControls.bind(this);
    this.mediumControls.addEventListener('click', this.expandControls);
    this.closeButton.addEventListener('click', this.closeControls);
  }

  expandControls(e) {
    this.title.classList.add('move');
    this.drawingPad.classList.add('move');
    this.buttonsContainer.classList.add('move');
    this.mediumControls.classList.add('expand');
    this.body.setAttribute('style','background: rgba(0, 0, 0, 0.5)');
  }

  closeControls(e) {
    console.log('im here baby');
    this.title.classList.remove('move');
    this.drawingPad.classList.remove('move');
    this.buttonsContainer.classList.remove('move');
    this.mediumControls.classList.remove('expand');
  }
  
}

export default MediumControls;
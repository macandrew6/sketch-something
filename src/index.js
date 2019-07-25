import DrawingPad from './components/drawing_pad';
import MediumControls from './components/medium_controller/medium_controls';


document.addEventListener('DOMContentLoaded', () => {
  let mediumControls = new MediumControls();
  new DrawingPad(mediumControls);
});

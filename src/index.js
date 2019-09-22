import DrawingPad from './components/drawing_pad';
import MediumControls from './components/medium_controller/medium_controls';
import MediumSelector from './components/medium_controller/medium_selector';
import ColorSelector from './components/medium_controller/color_selector';

document.addEventListener('DOMContentLoaded', () => {
  let mediumSelector = new MediumSelector();
  let colorSelector = new ColorSelector(mediumSelector);
  let mediumControls = new MediumControls(mediumSelector, colorSelector);
  new DrawingPad(mediumControls);
});

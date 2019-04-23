import { TOGGLE_LOADER } from '../actions/actionTypes';
import Loading from 'react-native-loader-overlay';

const initialState = {
  toggleLoader: false
};

const loaderStyle = {
  color: '#FFFFFF',
  size: 20,
  overlayColor: 'rgba(0,0,0,0.5)',
  closeOnTouch: false,
  loadingType: 'Spinner' // 'Bubbles', 'DoubleBounce', 'Bars', 'Pulse', 'Spinner'
};

let loading = false;

const toggleLoader = load => {
  if (load) {
    loading = Loading.show(loaderStyle);
  } else {
    Loading.hide(loading);
  }
};

export default function(state = initialState, action) {
  if (action.type === TOGGLE_LOADER) {
    toggleLoader(action.load);
    return {
      ...state,
      toggleLoader: !state.toggleLoader
    };
  }
  return state;
}

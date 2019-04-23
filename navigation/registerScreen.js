import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import OneScreen from '../screens/One';
import TwoScreen from '../screens/Two';
import configureStore from '../store/store';
import { ONE_SCREEN, TWO_SCREEN } from './screens';

const store = configureStore();

export default function() {
  Navigation.registerComponentWithRedux(ONE_SCREEN, () => OneScreen, Provider, store);
  Navigation.registerComponentWithRedux(TWO_SCREEN, () => TwoScreen, Provider, store);
}

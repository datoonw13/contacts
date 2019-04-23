import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { ONE_SCREEN, TWO_SCREEN } from './screens';

export function startTabBasedScreen() {
  Icon.getImageSource('ios-person').then(source => {
    source;
  });
  Promise.all([Icon.getImageSource('ios-person', 40, 'red'), Icon.getImageSource('ios-radio', 40, 'green')]).then(
    sources => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: ONE_SCREEN,
                        id: ONE_SCREEN + '.id',
                        passProps: {
                          text: 'This is one screen'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'Tab 1',
                      icon: sources[0]
                    }
                  }
                }
              },
              {
                component: {
                  name: TWO_SCREEN,
                  id: TWO_SCREEN + '.id',
                  passProps: {
                    text: 'This is two screen'
                  },
                  options: {
                    bottomTab: {
                      text: 'Tab 2',
                      icon: sources[1]
                    }
                  }
                }
              }
            ]
          }
        }
      });
    }
  );
}

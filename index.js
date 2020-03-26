/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './source/navigation/routing'

AppRegistry.registerComponent(appName, () => AppNavigator);

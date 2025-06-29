/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-reanimated'; // MUST be the first import!

import {AppRegistry} from 'react-native';
import App from './App';
// import DummyDrawer from './src/screens/DummyDrawer'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => DummyDrawer);

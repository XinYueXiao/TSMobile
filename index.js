/*
 * @Descripttion:
 * @Author: wangxinyue
 * @Date: 2020-02-19 17:01:34
 */
/**
 * @format
 */
import 'utils/config';
import {AppRegistry} from 'react-native';
import App from 'routers/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

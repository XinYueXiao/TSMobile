import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Provider} from 'react-redux';
import {ReduxStore} from 'reduxState/store';
import RootScreen from './RootScreen';

const PERMISSIONS = [
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];

const App = () => {
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);

  React.useEffect(() => {
    function checkPermissions() {
      if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple(PERMISSIONS).then(results => {
          const allPermissionsGranted = Object.values(results).every(
            result => result === 'granted',
          );
          if (allPermissionsGranted) {
            setPermissionsGranted(true);
          } else {
            //流氓逻辑，强制获取权限
            checkPermissions();
          }
        });
      } else {
        setPermissionsGranted(true);
      }
    }
    checkPermissions();
  }, []);
  //流氓逻辑，没权限白屏
  if (permissionsGranted) {
    return null;
  }
  return (
    <Provider store={ReduxStore}>
      <RootScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'stretch'
  },
});

export default App;

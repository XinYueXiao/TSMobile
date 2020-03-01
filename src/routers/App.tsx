import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Text,
} from 'react-native';

const PERMISSIONS = [
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];

const App = () => {
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);
  //应用第一次渲染加载
  React.useEffect(() => {
    //检查权限
    function checkPermissions() {
      if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple(PERMISSIONS).then(results => {
          const allPermissionsGranted = Object.values(
            //检查每一项为true
            results,
          ).every(result => result === 'granted');
          if (allPermissionsGranted) {
            setPermissionsGranted(true);
          } else {
            checkPermissions();
          }
        });
      } else {
        setPermissionsGranted(true);
      }
    }
    checkPermissions();
  }, []);
  if (permissionsGranted) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>测试权限获取</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'stretch'
  },
});

export default App;

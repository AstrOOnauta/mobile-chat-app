import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>Hello world</Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

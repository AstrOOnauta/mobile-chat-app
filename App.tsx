import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Routes from 'src/routes';

import 'react-native-gesture-handler';
import {THEME} from 'src/styles/theme';

function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;

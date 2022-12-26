import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Routes from 'src/routes';

import 'react-native-gesture-handler';

function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;

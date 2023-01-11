import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Routes from 'src/routes';

import 'react-native-gesture-handler';
import {THEME} from 'src/styles/theme';
import {AuthContextProvider} from 'src/shared/contexts/AuthContext';

function App() {
  const nativeBaseConfig = {
    dependencies: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };

  return (
    <NativeBaseProvider theme={THEME} config={nativeBaseConfig}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

export default App;

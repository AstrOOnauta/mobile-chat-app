import React from 'react';
import {NativeBaseProvider} from 'native-base';
import ChatCard from 'src/components/ChatCard';

function App() {
  return (
    <NativeBaseProvider>
      <ChatCard />
    </NativeBaseProvider>
  );
}

export default App;

import React from 'react';
import {Input as NativeBaseInput, IInputProps} from 'native-base';

export default function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput
      bg="secondary[-1]"
      color="light[0]"
      borderColor="light[0]"
      fontSize="md"
      _focus={{
        bg: 'secondary[-1]',
        borderColor: 'light[0]',
        color: 'light[0]',
        selectionColor: 'light[0]',
      }}
      {...rest}
    />
  );
}

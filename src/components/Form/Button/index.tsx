import React from 'react';
import {Button as NativeBaseButton, IButtonProps, Text} from 'native-base';

interface ButtonProps extends IButtonProps {
  type: 'primary' | 'secondary';
  title: string;
}

export default function Button({type, title, ...rest}: ButtonProps) {
  return (
    <NativeBaseButton
      w="100%"
      h={12}
      bg={type === 'primary' ? 'primary[0]' : 'transparent'}
      borderWidth={type === 'primary' ? 0 : 1}
      borderStyle="solid"
      borderColor={'light[0]'}
      _pressed={
        type === 'primary'
          ? {bg: 'primary[1]'}
          : {bg: 'transparent', opacity: 0.6}
      }
      {...rest}>
      <Text
        color={type === 'primary' ? 'secondary[0]' : 'light[0]'}
        fontWeight="bold"
        fontSize="2xl"
        mt={-1}>
        {title}
      </Text>
    </NativeBaseButton>
  );
}

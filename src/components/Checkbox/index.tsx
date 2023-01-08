import React from 'react';
import {Pressable, IPressableProps, useTheme} from 'native-base';
import * as Icon from 'phosphor-react-native';

interface CheckboxProps extends IPressableProps {
  isActive?: boolean;
}

export default function Checkbox({isActive, ...rest}: CheckboxProps) {
  return (
    <Pressable
      w={5}
      h={5}
      bg={isActive ? 'primary[0]' : 'light[0]'}
      borderRadius={3.5}
      borderWidth={1}
      borderStyle="solid"
      borderColor="primary[0]"
      alignItems="center"
      justifyContent="center"
      pb={0.5}
      pr={0.5}
      _pressed={{bg: 'primary[1]'}}
      {...rest}>
      <Icon.Check weight="bold" color="#F3F3F3" size={22} />
    </Pressable>
  );
}

import React from 'react';
import {Icon, Pressable, IPressableProps} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Icon
        as={MaterialCommunityIcons}
        name="check-bold"
        color="light[0]"
        size="md"
      />
    </Pressable>
  );
}

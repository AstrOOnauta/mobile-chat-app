import React from 'react';
import {Pressable} from 'native-base';
import * as Icon from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  function onSubmit() {
    navigation.goBack();
  }

  return (
    <Pressable
      w={10}
      h={10}
      ml={-4}
      alignItems="center"
      justifyContent="center"
      _pressed={{bg: 'transparent', opacity: 0.6}}
      onPress={onSubmit}>
      <Icon.CaretLeft color="#F3F3F3" size={26} weight="bold" />
    </Pressable>
  );
}

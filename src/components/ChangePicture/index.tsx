import React from 'react';
import {Avatar, Box, Pressable} from 'native-base';
import * as Icon from 'phosphor-react-native';

export default function ChangePicture() {
  return (
    <Box w={32} h={32} alignSelf="center">
      <Avatar
        bg="light[0]"
        alignSelf="center"
        size="2xl"
        source={require('../../assets/images/user-icon.png')}
        p={4}
      />
      <Pressable
        position="absolute"
        bottom={0}
        right={0}
        pt={1}
        w={10}
        h={10}
        borderRadius={50}
        bg="primary[0]"
        alignItems="center"
        justifyContent="center"
        _pressed={{opacity: 0.6}}>
        <Icon.Camera weight="fill" color="#303030" size={28} />
      </Pressable>
    </Box>
  );
}

import React from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {Avatar, Box, Pressable} from 'native-base';
import * as Icon from 'phosphor-react-native';
import * as ImagePicker from 'react-native-image-picker';
import {ImageLibraryOptions} from 'react-native-image-picker/lib/typescript/types';

interface ChangePictureProps {
  picture: string;
  changePicture: (picture: string) => void;
}

export default function ChangePicture({
  picture,
  changePicture,
}: ChangePictureProps) {
  async function launchImageLibrary() {
    const options: ImageLibraryOptions = {
      includeBase64: true,
      mediaType: 'photo' as const,
    };

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (
        granted === PermissionsAndroid.RESULTS.GRANTED ||
        Platform.OS === 'ios'
      ) {
        await ImagePicker.launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
          }

          if (response.assets) {
            changePicture(`data:image/png;base64,${response.assets[0].base64}`);
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <Box w={32} h={32} alignSelf="center">
      <Avatar
        bg="light[0]"
        alignSelf="center"
        size="2xl"
        source={
          picture
            ? {uri: picture}
            : require('../../assets/images/user-icon.png')
        }
        p={picture ? 0 : 4}
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
        _pressed={{opacity: 0.6}}
        onPress={launchImageLibrary}>
        <Icon.Camera weight="fill" color="#303030" size={28} />
      </Pressable>
    </Box>
  );
}

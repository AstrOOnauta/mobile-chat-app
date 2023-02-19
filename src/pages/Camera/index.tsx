import React, {useState, useRef} from 'react';
import {Modal} from 'react-native';
import {Image, Pressable, VStack} from 'native-base';
import {
  Camera,
  PhotoFile,
  useCameraDevices,
  VideoFile,
} from 'react-native-vision-camera';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';

import BackButton from 'src/components/BackButton';

export default function CameraPage() {
  const [mediaCaptured, setMediaCaptured] = useState<
    PhotoFile | VideoFile | undefined
  >(undefined);

  const camera = useRef<Camera>(null);
  const navigation = useNavigation();
  const devices = useCameraDevices();
  const device = devices.back;

  async function takePhoto() {
    const photo = await camera.current?.takePhoto();
    setMediaCaptured(photo as PhotoFile);
  }

  async function getCameraPermissions() {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
  }

  useFocusEffect(() => {
    getCameraPermissions();
  });

  if (device == null) {
    return (
      <VStack
        bg="secondary[0]"
        flex={1}
        alignItems="center"
        justifyContent="center"
      />
    );
  }

  return (
    <Modal visible onRequestClose={() => navigation.goBack()}>
      <VStack
        bg="secondary[0]"
        flex={1}
        alignItems="center"
        justifyContent="center">
        {mediaCaptured?.path ? (
          <>
            <Image
              w="100%"
              h="100%"
              source={{uri: `file://${mediaCaptured.path}`}}
              resizeMode="cover"
            />
            <Pressable
              position="absolute"
              right={6}
              top={6}
              w={10}
              h={10}
              borderRadius={20}
              alignItems="center"
              justifyContent="center"
              backgroundColor="rgba(0,0,0,.5)"
              onPress={() => setMediaCaptured(undefined)}>
              <Icon.X color="#F3F3F3" size={26} weight="bold" />
            </Pressable>
          </>
        ) : (
          <>
            <Camera
              style={{height: '100%', width: '100%'}}
              ref={camera}
              photo={true}
              device={device}
              isActive={true}
            />
            <VStack
              position="absolute"
              left={6}
              top={6}
              w={10}
              h={10}
              borderRadius={20}
              alignItems="center"
              justifyContent="center"
              paddingLeft={3}
              backgroundColor="rgba(0,0,0,.5)">
              <BackButton />
            </VStack>
            <Pressable
              position="absolute"
              bottom={10}
              width={50}
              height={50}
              backgroundColor="secondary[0]"
              borderRadius={50}
              borderWidth={2}
              borderColor="primary[0]"
              onPress={takePhoto}
            />
          </>
        )}
      </VStack>
    </Modal>
  );
}

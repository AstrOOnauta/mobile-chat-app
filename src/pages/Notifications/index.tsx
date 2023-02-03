import React, {useState} from 'react';
import {Heading, HStack, Switch, Text, VStack} from 'native-base';
import BackButton from 'src/components/BackButton';

export default function Notifications() {
  const [isEachChatMuted, setIsEachChatMuted] = useState<boolean>(false);
  const [isEachGroupMuted, setIsEachGroupMuted] = useState<boolean>(false);

  return (
    <VStack bg="secondary[0]" flex={1} padding={4}>
      <HStack alignItems="center" justifyContent="space-between" my={4}>
        <BackButton />
        <Heading color="primary[0]" numberOfLines={1}>
          Notifications
        </Heading>
        <VStack w={10} h={10} />
      </HStack>
      <VStack my={2}>
        <HStack
          w="100%"
          px={5}
          py={3}
          borderColor="light[0]"
          borderWidth={1}
          borderRadius={20}
          justifyContent="space-between"
          alignItems="center">
          <Text color="light[0]" fontWeight="bold" fontSize="xl">
            Mute Chats
          </Text>
          <Switch
            offTrackColor="light[1]"
            onTrackColor="primary[0]"
            size="lg"
            isChecked={isEachChatMuted}
            onToggle={e => setIsEachChatMuted(e)}
          />
        </HStack>
      </VStack>
      <VStack my={2}>
        <HStack
          w="100%"
          px={5}
          py={3}
          borderColor="light[0]"
          borderWidth={1}
          borderRadius={20}
          justifyContent="space-between"
          alignItems="center">
          <Text color="light[0]" fontWeight="bold" fontSize="xl">
            Mute Groups
          </Text>
          <Switch
            offTrackColor="light[1]"
            onTrackColor="primary[0]"
            size="lg"
            isChecked={isEachGroupMuted}
            onToggle={e => setIsEachGroupMuted(e)}
          />
        </HStack>
      </VStack>
    </VStack>
  );
}

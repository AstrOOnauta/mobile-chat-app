import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Heading, HStack, Input, Pressable, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';

import HomeRoutes from 'src/routes/home.routes';

export default function Home() {
  const [isSearchInputActive, setIsSearchInputActive] =
    useState<boolean>(false);

  function handleSearchButton() {
    setIsSearchInputActive(!isSearchInputActive);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VStack bg="secondary[0]" flex={1}>
        {isSearchInputActive ? (
          <Input
            autoFocus
            py={1.5}
            pl={4}
            m={4}
            h={10}
            borderRadius={30}
            bg="secondary[-1]"
            color="light[0]"
            borderColor="transparent"
            fontSize="md"
            _focus={{
              bg: 'secondary[-1]',
              borderColor: 'transparent',
              color: 'light[0]',
              selectionColor: 'light[0]',
            }}
            onBlur={() => setIsSearchInputActive(!isSearchInputActive)}
            InputRightElement={
              <VStack pr={2}>
                <Icon.MagnifyingGlass color="#F3F3F3" size={24} weight="bold" />
              </VStack>
            }
          />
        ) : (
          <HStack alignItems="center" justifyContent="space-between" m={4}>
            <Heading color="primary[0]">Meteor Chat</Heading>
            <Pressable
              w={10}
              h={10}
              p={2}
              borderRadius={20}
              backgroundColor="secondary[-1]"
              _pressed={{bg: 'transparent', opacity: 0.6}}
              onPress={handleSearchButton}>
              <Icon.MagnifyingGlass color="#FBB034" size={24} weight="bold" />
            </Pressable>
          </HStack>
        )}
        <HomeRoutes />
      </VStack>
    </TouchableWithoutFeedback>
  );
}

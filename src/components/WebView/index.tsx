import React from 'react';
import {Heading, HStack, Pressable, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';
import WebView from 'react-native-webview';

interface WebViewPageProps {
  link: string;
  title: string;
  closeWebView: () => void;
}

export default function WebViewPage({
  link,
  title,
  closeWebView,
}: WebViewPageProps) {
  return (
    <VStack flex={1} width="100%" bg="rgba(0,0,0,.4)">
      <Pressable w="100%" h={48} onPress={closeWebView} />
      <VStack flex={1} width="100%">
        <HStack
          bg="primary[0]"
          px={2}
          py={4}
          alignItems="center"
          justifyContent="space-between">
          <Pressable
            onPress={closeWebView}
            _pressed={{bg: 'primary[1]', opacity: 0.6}}>
            <Icon.X color="#F3F3F3" size={24} weight="bold" />
          </Pressable>
          <Heading
            color="secondary[0]"
            fontSize="xl"
            fontWeight="bold"
            numberOfLines={1}>
            {title}
          </Heading>
          <VStack w={10} />
        </HStack>
        <WebView source={{uri: link}} startInLoadingState={true} />
      </VStack>
    </VStack>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export type AuthRoutesParamsList = {
  'auth-home': {};
  login: {};
  'confirm-otp': {confirmation: any; phoneNumber: string};
};

export type AppRoutesParamsList = {
  'tab-navigation': {};
  'settings-navigation': {};
  'chat-box': {
    info: {
      isGroup?: boolean;
      groupId?: string;
      chatId?: string;
      displayName: string;
      photoUrl: string;
      lastMessage: {
        userId: string;
        displayName: string;
        message: string;
        timestamp: number;
      };
      unreadMessages: number;
      isPinned: boolean;
      membersCount?: number;
    };
  };
};

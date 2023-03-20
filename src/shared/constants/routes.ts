export const routes = {
  auth: {
    authHome: 'auth-home',
    login: 'login',
    confirmOTP: 'confirm-otp',
  },
  app: {
    tabNavigation: 'tab-navigation',
    tabRoutes: {
      home: 'home',
      camera: 'camera',
      contacts: 'contacts',
      settings: 'settings',
    },
    homeRoutes: {
      chats: 'chats',
      groups: 'groups',
    },
    settingsNavigation: 'settings-navigation',
    settingsRoutes: {
      profile: 'profile',
      notifications: 'notifications',
    },
    chatBox: 'chat-box',
  },
};

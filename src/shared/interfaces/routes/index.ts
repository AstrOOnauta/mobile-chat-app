/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthRoutesParamsList = {
  'auth-home': {};
  login: {};
  'confirm-otp': {confirmation: any; phoneNumber: string};
};

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: {
            screens: {
              Login: 'login',
            },
          },
          SingUp: {
            screens: {
              Singup: 'singup'
            },
          },
          CreateProfile: {
            screens: {
              CreateProfile: 'createprofile'
            },
          },
          ForgotPassword: {
            screens: {
              ForgotPassword: 'forgot-password'
            },
          },
          ResetPassword: {
            screens: {
              ResetPassword: 'reset-password'
            },
          },
        },
      },
      Menu: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Explore: {
            screens: {
              Explore: 'explore',
            },
          },
          Chalendar: {
            screens: {
              Chalendar: 'chalendar',
            },
          },
          Profile: {
            screens: {
              Profile: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AuthLoadingScreen from './pages/AuthLoadingScreen'

const StackNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerShown: false,
      headerVisible: false,
    },
  },
);

const StackNavigatorContainer = createAppContainer(StackNavigator);

const AuthStack = createStackNavigator(
  {
    SignIn: Welcome,
    App: StackNavigatorContainer,
    // SignUp: RegisterUser
  },
  {
    initialRouteName: 'SignIn',
  },
);

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: StackNavigatorContainer,
    // Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer;

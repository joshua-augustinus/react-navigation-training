import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator({ /* your routes here */ });
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export {AppContainer};
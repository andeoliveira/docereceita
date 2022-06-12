import 'react-native-gesture-handler';
import { 
  NativeBaseProvider,
} from 'native-base';
import {  NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import SimpleDefaultTheme from './src/config/SimpleDefaultTheme';

const App = () => {
  return (
    <NavigationContainer theme={SimpleDefaultTheme}>  
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  )
};

export default App
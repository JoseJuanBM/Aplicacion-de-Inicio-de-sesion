import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Home from './screen/Home';
import Insr from './screen/Insertar';

const stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Registro" component={Registro} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Ins" component={Insr} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

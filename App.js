import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CreateAccount from './screens/CreateAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{
          title : 'SignUp',
          headerTransparent: true,
          headerShadowVisible: false,
          headerBackTitle : 'Back'
        }} /> */}
        <Stack.Screen name="Create Account" component={CreateAccount} options={{headerShown:false}}   />
       </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position : 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    width: '100%',
    height: '100%',
  }
  ,
  text : {
    fontSize: 30,
    fontFamily : 'Poppins-Bold',
    color: '#61A63F',
    fontWeight: 'bold',
    position : 'absolute'

  }
});

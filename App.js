import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/Screen/HomeScreen';
import Register from './app/Screen/Register';
import authStore from './app/auth/storage';
import AuthStack from './app/Navigator/AuthStack';
import AuthContext from './app/auth/context';
import MainStack from './app/Navigator/MainStack';

export default function App() {
  const [userData,setUserData] = useState(null);
  const [isReady,setReady] = useState(false);



  return (
    <AuthContext.Provider value={{userData,setUserData}}>
         <NavigationContainer>
          {userData ? <MainStack /> : <AuthStack />}
     </NavigationContainer>
    </AuthContext.Provider>
  );
}



import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './app/Navigator/AuthStack';
import AuthContext from './app/auth/context';
import MainStack from './app/Navigator/MainStack';
import authStore from './app/auth/storage';
import AppLoading from 'expo-app-loading';
import React,{useState} from 'react';




export default function App() {
  const [userData,setUserData] = useState(null);
  const [isReady,setReady] = useState(false);

  const restoreUser = async () =>{
    const user = await authStore.getData();
    setUserData(user)
  }

  if(!isReady){
    return <AppLoading onError={console.warn} startAsync={restoreUser} onFinish={() => setReady(true)} />
  }

  return (
    <AuthContext.Provider value={{userData,setUserData}}>
         <NavigationContainer>
          {userData ? <MainStack /> : <AuthStack />}
     </NavigationContainer>
    </AuthContext.Provider>
  );
}



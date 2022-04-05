import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import Screen from '../Components/Screen'
import AuthContext from '../auth/context';

export default function HomeScreen() {
  const {userData,setUserData} = useContext(AuthContext);
  console.log(userData);
  return (
    <Screen>
      <Text>HomeScreen</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({})
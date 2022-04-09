import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useContext,useEffect} from 'react'
import Screen from '../Components/Screen'
import AuthContext from '../auth/context';
import { AntDesign } from "@expo/vector-icons";
import useAuth from '../auth/useAuth';

export default function HomeScreen({navigation}) {
  const {logOut} = useAuth();
  const {userData,setUserData} = useContext(AuthContext);
  console.log(userData);
  return (
    <Screen style={styles.container}>
      <Image 
      style={styles.tinyLogo}
      source={{uri : userData.logo}}
      />
      <Text>Company Name :- {userData.company_name}</Text>
      <Text>Company Contact :- {userData.company_contact}</Text>
      <Text>Company Address :- {userData.company_address}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateBill')}
      >
        <Text>Create Bill</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => logOut()}
      style={styles.profileButton} >
        <AntDesign name="user" size={30} color="white"/>
      </TouchableOpacity>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  tinyLogo : {
    width : 100,
    height:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius:4,
    marginTop:15
  },
  profileButton: {
    height: 70,
    width: 70,
    bottom:0,
    right:10,
    backgroundColor: "#1DA1F2",
    position: "absolute",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent:'center',
    margin:20,
    borderRadius:50,
    elevation:10
  },
})
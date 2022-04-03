import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../Components/Screen';
import { Form,FormField,SubmitButton,FormPicker as Picker,FormImagePicker, ErrorMessage} from '../Components/forms';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    Contact_No: Yup.number().required().min(10).label("Contact No."),
    Address: Yup.string().label("Address"),
    images: Yup.array().min(1, "कृपया एक तरी फोटो निवडा"),
    password: Yup.string().required().min(4).label("Password")
  });


export default function Register() {
  return (
   <Screen>
       
   </Screen>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, ScrollView,Alert } from "react-native";
import React, { useState } from "react";
import Screen from "../Components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  FormImagePicker,
  ErrorMessage,
} from "../Components/forms";
import * as Yup from "yup";
import colors from "../config/colors";
import useAuth from "../../app/auth/useAuth";

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required().min(1).label("Name"),
  company_contact: Yup.number().required().min(10).label("Contact No."),
  company_address: Yup.string().label("Address"),
});

export default function Register() {
  const auth = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async({images,company_name,company_contact,company_address}) => {

    const user = {
      logo : images[0],
      company_name,
      company_contact,
      company_address
    }

    try {
      auth.logIn(user);
    } catch (error) {
      Alert.alert("All Fields are Required");
    }

  }

  return (
    <Screen style={styles.container}>
        <Form
          initialValues={{
            images: [],
            company_name: "",
            company_contact: "",
            company_address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormImagePicker name="images" />
          <FormField
            maxLength={255}
            name="company_name"
            placeholder="Your Company Name"
          />
          <FormField
            maxLength={255}
            name="company_contact"
            placeholder="Your Company Contact"
          />
          <FormField
            maxLength={255}
            name="company_address"
            placeholder="Your Company Address"
          />
          <SubmitButton title="Next" />
        </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    padding:10,
    justifyContent:'center',
    backgroundColor:colors.gray
  },
});

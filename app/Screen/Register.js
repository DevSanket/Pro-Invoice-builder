import { StyleSheet, ScrollView } from "react-native";
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

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required().min(1).label("Name"),
  company_contact: Yup.number().required().min(10).label("Contact No."),
  company_address: Yup.string().label("Address"),
});

export default function Register() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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

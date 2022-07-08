import { useState } from "react";

import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../DB/userDB";
import useAuth from "../../store/auth/useAuth";

const initialValues = {
  username: "",
  password: "",
};

const rules = {
  username: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
};

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(rules),
    validateOnChange: false,
    onSubmit: ({ username, password }) => {
      if (username === user.username && password === user.password) {
        setError("");
        login(userDetails);
      } else {
        setError("El usuario o la contraseña son incorrectos");
      }
    },
  });

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(value) => formik.setFieldValue("username", value)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(value) => formik.setFieldValue("password", value)}
      />
      <Button title="Entrar" onPress={() => formik.submitForm()} />

      {formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}

      {formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  error: {
    textAlign: "center",
    color: "#ff0000",
    marginTop: 20,
  },
});

export default LoginForm;

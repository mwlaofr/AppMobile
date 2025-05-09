// app/login.tsx

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Importa o useRouter para navegação
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Svg, { Path } from "react-native-svg";
import InputField from "../components/InputField";
import GradientButton from "../components/GradientButton";
import RegisterButton from "@/components/RegisterButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook para navegação

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const handleLogin = () => {
    if (email && password) {
      router.push("/dashboard"); // Navega para a tela de dashboard
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}></View>
      </View>
      <Text style={styles.title}>Bem-Vindô</Text>
      <Text style={styles.subTitle}>Entre na sua conta</Text>
      <View style={styles.containerLogin}>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            marginTop={30}
          />
          <InputField
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.esqueciSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <GradientButton title="Entrar" onPress={handleLogin} />

        <Text style={styles.ou}>ou</Text>

        <RegisterButton title="Registrar" onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    position: "relative",
  },
  containerHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 400,
  },
  header1: {
    position: "absolute",
    width: "100%",
    height: 300,
    backgroundColor: "#254D32",
  },
  header: {
    width: "200%",
    top: -250,
    left: -150,
    height: 650,
    backgroundColor: "#254D32",
    transform: [{ rotate: "-18deg" }],
  },
  containerLogin: {
    width: "85%",
    maxWidth: 500,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 40,
    bottom: 50,
    right: 65,
    color: "#FFF",
  },
  subTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#B9B8B8",
    right: 99,
    bottom: 50,
  },
  esqueciSenha: {
    color: "#69B578",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  ou: {
    color: "#B9B8B8",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    marginVertical: 8,
  },
  inputContainer: {
    width: "75%",
    marginBottom: 25,
    position: "relative",
  },
});

// app/login.tsx

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Importa o useRouter para navegação
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Svg, { Path } from "react-native-svg";

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
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.subTitle}>Entre na sua conta</Text>
      <View style={styles.containerLogin}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input2}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.esqueciSenha}>esqueceu a senha?</Text>
        </View>

        <TouchableOpacity style={styles.gradientButton} onPress={handleLogin}>
          <LinearGradient
            colors={["#69B578", "#254D32"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.loginText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.ou}>ou</Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerText}>Registrar</Text>
        </TouchableOpacity>
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
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#B9B8B8",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  input2: {
    width: "100%",
    padding: 10,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#B9B8B8",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    marginTop: 30,
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
  gradientButton: {
    width: "75%",
    height: 40,
    padding: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  registerButton: {
    width: "55%",
    padding: 8,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#28A745",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  registerText: {
    color: "#28A745",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
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

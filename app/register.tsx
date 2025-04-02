// app/register.tsx (Tela de Registro)

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Usando useRouter para navegação

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de registro
    console.log("Email:", email);
    console.log("Senha:", password);

    // Após o registro, pode redirecionar para o dashboard ou outra tela
    router.push("/dashboard"); // Redireciona para a tela de dashboard (ajuste conforme necessário)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Registrar" onPress={handleRegister} />

      <Text style={styles.link} onPress={() => router.push("/splashScreen")}>
        Já tem uma conta? Faça login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: "blue",
    textAlign: "center",
  },
});

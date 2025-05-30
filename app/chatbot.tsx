import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import BottomNav from "../components/BottomNav";
import { Ionicons } from "@expo/vector-icons";

export default function ChatBot() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como posso te ajudar hoje?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { id: Date.now(), text: input, sender: "user" };
    const botResponse = {
      id: Date.now() + 1,
      text: "Entendi! Vou analisar sua solicitação.",
      sender: "bot",
    };

    setMessages((prev) => [...prev, newMessage, botResponse]);
    setInput("");
  };

  if (!fontsLoaded) return null;

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.header}>Assistente Virtual</Text>

        <ScrollView style={styles.chatBox} contentContainerStyle={{ paddingBottom: 100 }}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.sender === "user" ? styles.userBubble : styles.botBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  msg.sender === "user" ? styles.userText : styles.botText,
                ]}
              >
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Ionicons name="send" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontFamily: "Roboto-Bold",
    color: "#254D32",
    marginBottom: 20,
  },
  chatBox: {
    flex: 1,
  },
  messageBubble: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    maxWidth: "80%",
  },
  userBubble: {
    backgroundColor: "#69B578",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  botBubble: {
    backgroundColor: "#E0E0E0",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 15,
  },
  userText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
  },
  botText: {
    color: "#333",
    fontFamily: "Roboto-Regular",
  },
  inputContainer: {
    position: "absolute",
    bottom: 60,
    left: 16,
    right: 16,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  sendButton: {
    backgroundColor: "#69B578",
    padding: 10,
    borderRadius: 20,
    marginLeft: 8,
  },
});

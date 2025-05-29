import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

interface SidebarProps {
  onNavigate: (screen: string) => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <View style={styles.sidebar}>
      <View style={styles.logoContainer}>
        <Ionicons name="menu" size={20} />
        {" "}
        <Image style={styles.logo} source={require("@/assets/Logo.png")} />{" "}
        <Text style={styles.logoText}>ecoVision</Text>{" "}
      </View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => onNavigate("Inicio")}
      >
        <Ionicons name="home-outline" size={20} />
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => onNavigate("Monitoramento")}
      >
        <Ionicons name="desktop-outline" size={20} />
        <Text style={styles.text}>Monitoramento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => onNavigate("Chatbot")}
      >
        <MaterialCommunityIcons name="robot-outline" size={20} />
        <Text style={styles.text}>Chatbot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => onNavigate("Relatorios")}
      >
        <Ionicons name="document-text-outline" size={20} />
        <Text style={styles.text}>Relatórios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => onNavigate("Controle")}
      >
        <FontAwesome5 name="cogs" size={20} />
        <Text style={styles.text}>Controle de máquinas</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => onNavigate("Configuracoes")}
        >
          <Ionicons name="settings-outline" size={20} />
          <Text style={styles.text}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => onNavigate("Ajuda")}
        >
          <Ionicons name="help-circle-outline" size={20} />
          <Text style={styles.text}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
    position: "absolute",
    zIndex: 10,
    elevation: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  bottom: {
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 20,
  },
});

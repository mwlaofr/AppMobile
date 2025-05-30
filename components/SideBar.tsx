import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

interface SidebarProps {
  onNavigate: (screen: string) => void;
  onToggle: () => void
}

export default function Sidebar({ onNavigate, onToggle }: SidebarProps) {
  return (
    <View style={styles.sidebar}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={onToggle}>
          <Ionicons name="menu" size={24} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require("@/assets/Logo.png")} />
        <Text style={styles.logoText}>ecoVision</Text>
      </View>

      {/* Itens do menu */}
      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Inicio")}>
        <Ionicons name="home-outline" size={20} />
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Monitoramento")}>
        <Ionicons name="desktop-outline" size={20} />
        <Text style={styles.text}>Monitoramento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Chatbot")}>
        <MaterialCommunityIcons name="robot-outline" size={20} />
        <Text style={styles.text}>Chatbot</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Relatorios")}>
        <Ionicons name="document-text-outline" size={20} />
        <Text style={styles.text}>Relatórios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Controle")}>
        <FontAwesome5 name="cogs" size={20} />
        <Text style={styles.text}>Controle de máquinas</Text>
      </TouchableOpacity>

      {/* Rodapé fixo */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.item} onPress={() => onNavigate("Configuracoes")}>
          <Ionicons name="settings-outline" size={20} />
          <Text style={styles.text}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => onNavigate("Ajuda")}>
          <Ionicons name="help-circle-outline" size={20} />
          <Text style={styles.text}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  sidebar: {
    width: width < 500 ? "60%" : 250,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 16,
    height: "100%",
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 4,
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
    marginLeft: 10,
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
  footer: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 20,
  },
});

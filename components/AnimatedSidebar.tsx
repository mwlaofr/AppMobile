import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Image } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SIDEBAR_WIDTH = 250;

interface Props {
  onNavigate: (screen: string) => void;
  isVisible: boolean;
  toggleSidebar: () => void;
  animation: Animated.Value;
}

export default function AnimatedSidebar({
  onNavigate,
  isVisible,
  toggleSidebar,
  animation,
}: Props) {
  const sidebarTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-SIDEBAR_WIDTH, 0],
  });

  return (
    <Animated.View
      style={[
        styles.sidebar,
        { transform: [{ translateX: sidebarTranslate }] },
      ]}
    >
      <TouchableOpacity onPress={toggleSidebar} style={styles.closeBtn}>
        <Ionicons name="close" size={28} color="#000" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("@/assets/Logo.png")} />
        <Text style={styles.logoText}>ecoVision</Text>
      </View>

      {[
        ["Inicio", "home-outline", Ionicons],
        ["Monitoramento", "desktop-outline", Ionicons],
        ["Chatbot", "robot-outline", MaterialCommunityIcons],
        ["Relatorios", "document-text-outline", Ionicons],
        ["Controle", "cogs", FontAwesome5],
        ["Configuracoes", "settings-outline", Ionicons],
        ["Ajuda", "help-circle-outline", Ionicons],
      ].map(([screen, icon, Icon], idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.item}
          onPress={() => onNavigate(screen)}
        >
          <Icon name={icon} size={20} />
          <Text style={styles.text}>{screen}</Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 20,
    elevation: 20,
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 8,
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
});

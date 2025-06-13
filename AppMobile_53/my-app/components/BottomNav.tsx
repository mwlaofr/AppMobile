import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const tabs = [
  { name: "Dashboard", icon: "dashboard", route: "/dashboard" },
  { name: "Monitoramento", icon: "monitor-heart", route: "/monitoring" },
  { name: "ChatBot", icon: "smart-toy", route: "/chatbot" },
  { name: "Alertas", icon: "notifications", route: "/alerts" },
  { name: "Configurações", icon: "settings", route: "/settings" },
] as const;

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map(({ name, icon, route }) => {
        const isActive = pathname === route;
        return (
          <TouchableOpacity
            key={name}
            onPress={() => router.push(route)}
            style={styles.tabButton}
          >
            <MaterialIcons
              name={icon}
              size={24}
              color={isActive ? "#69B578" : "#999"}
            />
            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#999",
    fontFamily: "Roboto-Regular",
  },
  activeText: {
    color: "#69B578",
    fontFamily: "Roboto-Bold",
  },
});

import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Sidebar from "../components/SideBar";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboard}>
        <Sidebar onNavigate={handleNavigate} />
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo ao Dashboard</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dee2e6",
  },
  dashboard: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#333",
  },
});

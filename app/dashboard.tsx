// Em dashboard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Sidebar from "../components/SideBar";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };
  return (
    <View style={styles.dashboard}>
      <Sidebar onNavigate={handleNavigate}/> 
      <Text>Bem-vindo ao Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard:{
    backgroundColor: "#dee2e6",
  },
})
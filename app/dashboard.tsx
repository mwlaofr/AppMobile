import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Animated, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";

const { width } = Dimensions.get("window");

export default function Dashboard() {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const animation = useRef(new Animated.Value(-width * 0.7)).current;

  const toggleSidebar = () => {
    Animated.timing(animation, {
      toValue: isSidebarVisible ? -width * 0.7 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setSidebarVisible(!isSidebarVisible));
  };

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
    toggleSidebar();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Dashboard" onMenuPress={toggleSidebar} /> {/* ← novo header */}

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao Dashboard</Text>
      </View>

      <Animated.View
        style={[
          styles.sidebarContainer,
          { transform: [{ translateX: animation }] },
        ]}
      >
        <Sidebar onNavigate={handleNavigate} onToggle={toggleSidebar} />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  sidebarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.7,
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 10,
    elevation: 10,
  },
});

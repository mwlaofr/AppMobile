import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Animated, Dimensions, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Dashboard() {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const animation = useRef(new Animated.Value(-width * 0.7)).current;
  const insets = useSafeAreaInsets();

  const toggleSidebar = () => {
    Animated.timing(animation, {
      toValue: isSidebarVisible ? -width * 0.6 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setSidebarVisible(!isSidebarVisible));
  };

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
    toggleSidebar();
  };

  return (
    <>
      {Platform.OS === "ios" && (
        <View style={[styles.statusBarBackground, { height: insets.top }]} />
      )}

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={Platform.OS === "ios"}
      />

      <SafeAreaView style={styles.safeArea}>
        <Header title="Dashboard" onMenuPress={toggleSidebar} />

        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo ao Dashboard</Text>
        </View>

        <Animated.View
          style={[
            styles.sidebarContainer,
            {
              width: width * 0.6,
              transform: [{ translateX: animation }],
              top: 0,
              height: height,
              paddingTop: 0,
            },
          ]}
        >
          <Sidebar onNavigate={handleNavigate} onToggle={toggleSidebar} />
        </Animated.View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#91cca1",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#000",
  },
  sidebarContainer: {
    position: "absolute",
    left: 0,
    backgroundColor: "#fff",
    zIndex: 10,
    elevation: 10,
  },
});

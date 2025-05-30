import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import BottomNav from "../components/BottomNav";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // import para poder trocar idioma

export default function Settings() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const { t } = useTranslation();

  const settings = [
    {
      id: 1,
      title: t("edit_profile"),
      icon: "person",
      onPress: () =>
        Alert.alert(t("edit_profile"), "Funcionalidade em breve."),
    },
    {
      id: 2,
      title: t("notifications"),
      icon: "notifications-active",
      onPress: () =>
        Alert.alert(t("notifications"), "Configurações em breve."),
    },
    {
      id: 3,
      title: t("language"),
      icon: "language",
      onPress: () => {
        Alert.alert(
          t("language"),
          null,
          [
            { text: "Português", onPress: () => i18n.changeLanguage("pt") },
            { text: "Inglês", onPress: () => i18n.changeLanguage("en") },
            { text: "Espanhol", onPress: () => i18n.changeLanguage("es") },
            { text: "Cancelar", style: "cancel" },
          ],
          { cancelable: true }
        );
      },
    },
    {
      id: 4,
      title: t("about"),
      icon: "info",
      onPress: () => Alert.alert(t("about"), t("version")),
    },
    {
      id: 5,
      title: t("logout"),
      icon: "logout",
      onPress: () =>
        Alert.alert(t("logout"), t("logout_success"), [
          {
            text: "OK",
            onPress: () => {
              // Redirecionar para a tela de login (substitua por navegação real no seu app)
              console.log("Voltar para a tela de login");
            },
          },
        ]),
    },
  ];

  if (!fontsLoaded) return null;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>{t("settings")}</Text>
        <ScrollView style={styles.optionsContainer}>
          {settings.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.optionItem}
              onPress={item.onPress}
            >
              <MaterialIcons name={item.icon} size={24} color="#254D32" />
              <Text style={styles.optionText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 26,
    fontFamily: "Roboto-Bold",
    color: "#254D32",
    marginBottom: 20,
  },
  optionsContainer: {
    paddingBottom: 100,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#333",
  },
});

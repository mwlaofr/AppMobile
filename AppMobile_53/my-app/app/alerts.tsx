import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";
import { useFonts } from "expo-font";
import { useTranslation } from "react-i18next";

export default function Alertas() {
  const { t } = useTranslation("alerts");

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  const alertas = [
    {
      id: 1,
      titulo: t("highTemperature"),
      descricao: t("sensor5HighTemp"),
      status: "crítico",
      data: "15/05/2025 09:24",
    },
    {
      id: 2,
      titulo: t("lowHumidity"),
      descricao: t("sensor3LowHumidity"),
      status: "alerta",
      data: "15/05/2025 08:50",
    },
    {
      id: 3,
      titulo: t("stableOperation"),
      descricao: t("allSensorsNormal"),
      status: "normal",
      data: "15/05/2025 07:45",
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>{t("recentAlerts")}</Text>
        <ScrollView style={styles.alertList}>
          {alertas.map((alerta) => (
            <View key={alerta.id} style={styles.alertItem}>
              <View style={styles.iconContainer}>
                {alerta.status === "crítico" && (
                  <MaterialIcons name="warning" size={24} color="#D9534F" />
                )}
                {alerta.status === "alerta" && (
                  <FontAwesome5 name="exclamation-triangle" size={20} color="#F0AD4E" />
                )}
                {alerta.status === "normal" && (
                  <MaterialIcons name="check-circle" size={24} color="#5CB85C" />
                )}
              </View>

              <View style={styles.alertText}>
                <Text style={styles.title}>{alerta.titulo}</Text>
                <Text style={styles.description}>{alerta.descricao}</Text>
                <Text style={styles.date}>{alerta.data}</Text>
              </View>
            </View>
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
  alertList: {
    paddingBottom: 100,
  },
  alertItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 4,
  },
  alertText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "#555",
    marginTop: 2,
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
    fontFamily: "Roboto-Regular",
  },
});

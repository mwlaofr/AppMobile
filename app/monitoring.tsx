// /app/monitoramento.tsx

import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { LineChart, BarChart } from "react-native-chart-kit";
import BottomNav from "../components/BottomNav";

const screenWidth = Dimensions.get("window").width;

export default function Monitoramento() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <Text style={styles.header}>Monitoramento</Text>

        <Text style={styles.sectionTitle}>Temperatura por Hora</Text>
        <LineChart
          data={{
            labels: ["6h", "8h", "10h", "12h", "14h", "16h"],
            datasets: [
              {
                data: [20, 22, 24, 23, 25, 21],
                strokeWidth: 2,
              },
            ],
          }}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#69B578",
            backgroundGradientTo: "#254D32",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: () => "#fff",
          }}
          style={styles.chart}
          bezier
        />

        <Text style={styles.sectionTitle}>Consumo Energético (kWh)</Text>
        <BarChart
          data={{
            labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
            datasets: [
              {
                data: [30, 45, 28, 80, 60],
              },
            ],
          }}
          width={screenWidth - 32}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: "#A1C181",
            backgroundGradientTo: "#69B578",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: () => "#333",
          }}
          style={styles.chart}
        />
      </ScrollView>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    color: "#254D32",
    marginBottom: 20,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    color: "#254D32",
    marginVertical: 10,
  },
  chart: {
    borderRadius: 15,
    marginBottom: 20,
  },
});

// /app/dashboard.tsx

import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { LineChart, PieChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";
import BottomNav from "../components/BottomNav";
import GradientButton from "../components/GradientButton";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
        <Text style={styles.header}>Dashboard</Text>

        {/* Cards indicadores */}
        <View style={styles.cardContainer}>
          <View style={[styles.card, { backgroundColor: "#69B578" }]}>
            <Text style={styles.cardTitle}>Reciclado Hoje</Text>
            <Text style={styles.cardValue}>150 kg</Text>
          </View>
          <View style={[styles.card, { backgroundColor: "#A1C181" }]}>
            <Text style={styles.cardTitle}>Alertas Ativos</Text>
            <Text style={styles.cardValue}>3</Text>
          </View>
          <View style={[styles.card, { backgroundColor: "#FFB627" }]}>
            <Text style={styles.cardTitle}>Média Semanal</Text>
            <Text style={styles.cardValue}>85 kg</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Produção Diária (Últimos 7 dias)</Text>
        <LineChart
          data={{
            labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
            datasets: [
              {
                data: [45, 60, 50, 80, 90, 70, 100],
                strokeWidth: 2,
              },
            ],
          }}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            backgroundColor: "#254D32",
            backgroundGradientFrom: "#69B578",
            backgroundGradientTo: "#254D32",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: () => "#fff",
          }}
          style={styles.chart}
          bezier
        />

        <Text style={styles.sectionTitle}>Distribuição dos Materiais Separados</Text>
        <PieChart
          data={[
            {
              name: "Plástico",
              population: 40,
              color: "#69B578",
              legendFontColor: "#333",
              legendFontSize: 14,
            },
            {
              name: "Papel",
              population: 25,
              color: "#A1C181",
              legendFontColor: "#333",
              legendFontSize: 14,
            },
            {
              name: "Metal",
              population: 20,
              color: "#FFB627",
              legendFontColor: "#333",
              legendFontSize: 14,
            },
            {
              name: "Vidro",
              population: 15,
              color: "#E76F51",
              legendFontColor: "#333",
              legendFontSize: 14,
            },
          ]}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            color: () => "#fff",
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chart}
        />

      l
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
    fontSize: 32,
    fontFamily: "Roboto-Bold",
    color: "#69B578",
    marginBottom: 20,
    marginTop: 40,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
  cardTitle: {
    fontFamily: "Roboto-Bold",
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  cardValue: {
    fontFamily: "Roboto-Bold",
    color: "#fff",
    fontSize: 22,
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

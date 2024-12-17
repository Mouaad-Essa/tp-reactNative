import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour :D</Text>
      <Button
        title="Home"
        onPress={() => router.push("/homeScreen")}
        color="#007bff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

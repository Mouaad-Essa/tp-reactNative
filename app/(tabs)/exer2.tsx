import {
  Text,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Test 1"
        onPress={() => Alert.alert("vous avez cliqué sur Test 1")}
        color={"#f74949"}
      />

      <TouchableOpacity
        style={styles.btn2}
        onPress={() => Alert.alert("vous avez cliqué sur Test 2")}
      >
        <Text style={styles.text}>Test 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 10,
    backgroundColor: "#383838",
  },
  btn2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#3852e8",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";

import React, { Component } from "react";

type myBtnType = {
  title: string;
  onPress: () => void;
  color: string;
};

const MyButton = ({ title, onPress, color }: myBtnType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(styles.button, { backgroundColor: color })}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export class exer3 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyButton
          title="Début du Test 2"
          onPress={() => Alert.alert("Alert", "ceci est le début du test2")}
          color="#3852e8"
        />

        <MyButton
          title="Fin du Test 2"
          onPress={() => Alert.alert("Alert", "ceci est la fin du test2")}
          color="#f74949"
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 10,
    backgroundColor: "#383838",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default exer3;

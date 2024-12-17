import { View, Text, StatusBar, FlatList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  const data = [
    {
      title: "title 01",
      description: "description 01",
    },
    {
      title: "title 02",
      description: "description 02",
    },
    {
      title: "title 03",
      description: "description 03",
    },
    {
      title: "title 04",
      description: "description 04",
    },
    {
      title: "title 05",
      description: "description 05",
    },
    {
      title: "title 06",
      description: "description 06",
    },
    {
      title: "title 07",
      description: "description 07",
    },
    {
      title: "title 08",
      description: "description 08",
    },
    {
      title: "title 09",
      description: "description 09",
    },
    {
      title: "title 10",
      description: "description 10",
    },
    {
      title: "title 11",
      description: "description 11",
    },
    {
      title: "title 12",
      description: "description 12",
    },
    {
      title: "title 13",
      description: "description 13",
    },
    {
      title: "title 14",
      description: "description 14",
    },
    {
      title: "title 15",
      description: "description 15",
    },
  ];

  type propsType = {
    title: string;
    description: string;
  };

  const Item = ({ title, description }: propsType) => (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} />
        )}
      />
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#383838",
  },
  item: {
    backgroundColor: "#3852e8",
    padding: 20,
    marginVertical: 8,
    borderRadius: 15,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
  desc: {
    fontSize: 15,
    color: "#ccc",
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notFoundText}> Page Not Found</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 24,
    color: "gray",
  },
});

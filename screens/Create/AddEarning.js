import { View, Text, StyleSheet } from "react-native";

export default function AddEarning() {
  return (
    <View style={styles.container}>
      <Text>Add New Earning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

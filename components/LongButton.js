import { StyleSheet, View, Text } from "react-native";

export default function LongButton({text}) {
  return (
    <View style={styles.button}>
      <Text style={styles.btnTxt}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#12B886",
    width: 315,
    padding: 20,
    borderRadius: 12,
  },
  btnTxt:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,
    fontFamily:"PoppinsBold"
  }
});

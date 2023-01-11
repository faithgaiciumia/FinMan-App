import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function DisplayRow() {
  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <Image
          source={{
            uri: "https://img.icons8.com/fluency/512/home-page.png",
          }}
          style={{ width: 40, height: 40, marginRight:10 }}
        />
        <View>
          <Text style={styles.heading}>Rent</Text>
          <Text style={styles.text}>Yesterday</Text>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>-Kes 10,000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginVertical:10
  },
  col: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  heading:{
    fontFamily:"PoppinsBold",
    fontSize:15,
  },
  text:{
    fontFamily:"Poppins"
  }
});

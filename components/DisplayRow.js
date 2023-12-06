import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function DisplayRow({uri, commodity, time, amount}) {
  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <Image
          source={{ 
            uri: uri,
          }}
          style={{ width: 40, height: 40, marginRight:10 }}
        />
        <View>
          <Text style={styles.heading}>{commodity}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>-{amount}</Text>
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

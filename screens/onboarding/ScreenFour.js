import { TextInput } from "@react-native-material/core";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LongButton from "../../components/LongButton";

export default function ScreenFour() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/onb.png")}
        style={styles.onbImg}
      />
      <Text style={[styles.heading]}>Set a Password</Text>
      <TextInput label="Password" variant="outlined" style={styles.textInput} />
      <TextInput label="Confirm Password" variant="outlined" style={styles.textInput} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <LongButton text="Done" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  onbImg: {
    width: Dimensions.get("screen").width,
    height: 570,
  },
  heading: {
    marginTop: -30,
    fontFamily: "PoppinsBold",
    fontSize: 24,
    width: "30%",
    marginHorizontal: 20,
  },
  text: {
    margin: 20,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
  button: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 40,
    marginHorizontal:20,
    marginTop:40
  },
  textInput: {
    width: Dimensions.get("screen").width - 40,
    marginHorizontal: 20,
    marginTop:5,

  },
  btnTxt:{
    color:"#12B886",
    fontFamily:"PoppinsMedium"
  }
});

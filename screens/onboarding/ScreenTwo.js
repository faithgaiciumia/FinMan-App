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

export default function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/onb.png")}
        style={styles.onbImg}
      />
      <Text style={[styles.heading]}>Tell us your name</Text>
      <TextInput label="Name" variant="outlined" style={styles.textInput} />
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.btnTxt}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnTxt}>Next</Text>
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
    height: 600,
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
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 40,
    marginHorizontal:20,
    marginTop:100
  },
  textInput: {
    width: Dimensions.get("screen").width - 40,
    margin: 20,
  },
  btnTxt:{
    color:"#12B886",
    fontFamily:"PoppinsMedium"
  }
});

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LongButton from "../../components/LongButton";

export default function ScreenFour({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/onb.png")}
        style={styles.onbImg}
      />
      <Text style={[styles.heading]}>
        Be in Control of your finances, save and invest in your future
      </Text>
      <Text style={styles.text}>
        View your insights on the my insights page. These include your daily
        average spending, total earning and tips on how to improve your
        financial freedom.
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.replace("signup") }>
          <LongButton text="Get Started" />
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
    width: "80%",
    marginHorizontal: 20,
  },
  text: {
    margin: 20,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
  },
});

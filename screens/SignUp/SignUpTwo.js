import { TextInput } from "@react-native-material/core";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import LongButton from "../../components/LongButton";

export default function SignUpTwo({
  email,
  setEmail,
  emailErr,
  setEmailErr,
  setStepTwo,
  setStepThree,
  step,
  setStep
}) {
  const validateData = () => {
    let validEmail = /\S+@\S+\.\S+/.test(email);
    //check if it is empty
    if (email === "") {
      setemailErr("Email is required");
      return;
    }
    //check if it is a valid email
    if (!validEmail) {
      setEmailErr("The email is invalid");
      return;
    }
    //move to the next step
    setStepTwo(false);
    setStep(3);
    setStepThree(true);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.text}>Step {step}/3</Text>
          <Text style={[styles.heading]}>Tell us your email</Text>
          <TextInput
            label="Email"
            variant="outlined"
            style={styles.textInput}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          {/* conditionally render the error message */}
          {emailErr && <Text style={styles.errorTxt}>{emailErr}</Text>}
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={validateData}>
              <LongButton text="Save" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "center",
    backgroundColor: "#fff",
    marginTop: 50,
  },
  onbImg: {
    width: Dimensions.get("screen").width,
    height: 300,
  },
  heading: {
    marginTop: 0,
    fontFamily: "PoppinsBold",
    fontSize: 24,
    width: "30%",
    marginHorizontal: 20,
  },
  text: {
    margin: 20,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    textAlign: "right",
  },
  errorTxt: {
    marginHorizontal: 20,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: "red",
  },
  button: {
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 40,
    marginHorizontal: 20,
    marginTop: 0,
  },
  textInput: {
    width: Dimensions.get("screen").width - 40,
    marginHorizontal: 20,
  },
  btnTxt: {
    color: "#12B886",
    fontFamily: "PoppinsMedium",
  },
});

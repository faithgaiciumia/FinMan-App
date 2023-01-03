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

export default function SignUpOne({
  fullName,
  setFullName,
  fullNameErr,
  setFullNameErr,
  setStepOne,
  setStepTwo,
  step,
  setStep
}) {
  const validateData = () => {    
    //check if it is empty
    if (fullName === "") {
      setFullNameErr("Name is required");
      return;
    }
    //check length of name - should be at least 3 characters
    if (fullName.length < 3) {
      setFullNameErr(
        "Name is too short. - It should be at least 3 characters."
      );
      return;
    }
    //move to the next step.
    setStepOne(false);
    setStep(2);
    setStepTwo(true);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>          
          <Text style={styles.text}>Step {step}/3</Text>
          <Text style={[styles.heading]}>Tell us your name</Text>
          <TextInput
            label="Name"
            variant="outlined"
            style={styles.textInput}
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
          />
          {/* conditionally render the error message */}
          {fullNameErr && <Text style={styles.errorTxt}>{fullNameErr}</Text>}
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
    marginTop:50
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
    margin: 10,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    textAlign:"right"
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

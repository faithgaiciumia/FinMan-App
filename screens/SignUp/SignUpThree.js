import { IconButton, TextInput } from "@react-native-material/core";
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
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import LongButton from "../../components/LongButton";
import React from "react";

export default function SignUpThree({
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
  confirmPassErr,
  setConfirmPassErr,
  passwordErr,
  setPasswordErr,
  setStepThree,
  step,
  setStep,
  navigation,
}) {
  //initialize the show password toggles
  const [hidePass, setHidePass] = React.useState(true);
  const [hideConfirmPass, setHideConfirmPass] = React.useState(true);
  const validateData = () => {
    let strongPassword =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})/.test(
        password
      );
    //password is empty
    if (password === "") {
      setPasswordErr("Password is required.");
      return;
    }
    //check if passwords match
    if (password !== confirmPass) {
      setConfirmPassErr("Passwords do not match.");
      return;
    }
    //check if it is a strong password
    if (!strongPassword) {
      setPasswordErr(
        "Weak Password. Ensure it is more than 10 characters and has alphanumeric characters."
      );
      return;
    }
    //move to home page
    setStepThree(false);
    navigation.replace("Home");
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.text}>Step {step}/3</Text>
          <Text style={[styles.heading]}>Set a Password</Text>
          <TextInput
            label="Password"
            variant="outlined"
            style={styles.textInput}
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={hidePass}
            trailing={(props) => (
              <IconButton
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
                onPress={() => setHidePass(!hidePass)}
              />
            )}
          />
          {/* conditionally render the error message */}
          {passwordErr && <Text style={styles.errorTxt}>{passwordErr}</Text>}
          <TextInput
            label="Confirm Password"
            variant="outlined"
            style={styles.textInput}
            value={confirmPass}
            onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
            secureTextEntry={hideConfirmPass}
            trailing={(props) => (
              <IconButton
                icon={(props) => <Icon name="eye" {...props} />}
                {...props}
                onPress={() => setHideConfirmPass(!hideConfirmPass)}
              />
            )}
          />
          {/* conditionally render the error message */}
          {confirmPassErr && (
            <Text style={styles.errorTxt}>{confirmPassErr}</Text>
          )}

          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={validateData}>
              <LongButton text="Done" />
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
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 40,
    marginHorizontal: 20,
    marginTop: 40,
  },
  textInput: {
    width: Dimensions.get("screen").width - 40,
    marginHorizontal: 20,
    marginTop: 5,
  },
  btnTxt: {
    color: "#12B886",
    fontFamily: "PoppinsMedium",
  },
});

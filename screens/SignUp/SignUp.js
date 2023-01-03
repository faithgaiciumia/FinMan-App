import { Text, View, StyleSheet, Dimensions } from "react-native";
import SignUpOne from "./SignUpOne";
import SignUpTwo from "./SignUpTwo";
import SignUpThree from "./SignUpThree";
import React from "react";

export default function SignUp({ navigation }) {
  //initiliaze formdata variables
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  //initialise error messages
  const [emailErr, setEmailErr] = React.useState(null);
  const [fullNameErr, setFullNameErr] = React.useState(null);
  const [passwordErr, setPasswordErr] = React.useState(null);
  const [confirmPassErr, setConfirmPassErr] = React.useState(null);
  //initialise conditional rendering variables
  const [stepOne, setStepOne] = React.useState(true);
  const [stepTwo, setStepTwo] = React.useState(false);
  const [stepThree, setStepThree] = React.useState(false);
  const [step, setStep] = React.useState(1);

  return (
    <View style={styles.container}>
      {stepOne && (
        <SignUpOne
          fullName={fullName}
          setFullName={setFullName}
          fullNameErr={fullNameErr}
          setFullNameErr={setFullNameErr}
          setStepOne={setStepOne}
          setStepTwo={setStepTwo}
          step={step}
          setStep={setStep}
        />
      )}
      {stepTwo && (
        <SignUpTwo
          email={email}
          setEmail={setEmail}
          emailErr={emailErr}
          setEmailErr={setEmailErr}
          setStepTwo={setStepTwo}
          setStepThree={setStepThree}
          step={step}
          setStep={setStep}
        />
      )}
      {stepThree && (
        <SignUpThree
          password={password}
          setPassword={setPassword}
          confirmPass={confirmPass}
          setConfirmPass={setConfirmPass}
          confirmPassErr={confirmPassErr}
          setConfirmPassErr={setConfirmPassErr}
          passwordErr={passwordErr}
          setPasswordErr={setPasswordErr}
          setStepThree={setStepThree}
          step={step}
          setStep={setStep}
          navigation={navigation}
          
        />
      )}
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

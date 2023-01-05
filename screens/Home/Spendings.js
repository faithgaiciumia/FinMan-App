import { Text, View, StyleSheet, Dimensions } from "react-native";
export default function Spendings(){
    return(
        <View style={styles.container} >
            <Text style={styles.heading}>
                Hooray you're home
            </Text>
        </View>
    )
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
      marginTop: 10,
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
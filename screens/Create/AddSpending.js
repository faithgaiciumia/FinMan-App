import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "@react-native-material/core";
import React from "react";
import SelectRow from "../../components/SelectRow";

export default function AddSpending() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.selectBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.selectTxt}>Type of Expense</Text>
            <AntDesign name="down" size={24} color="black" />
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            transparent={true}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.selectHeading}>
                    Select Spending Category
                  </Text>
                  <View style={styles.divider}></View>
                  <View>
                    <TouchableOpacity>
                      <SelectRow
                        spendingName="Rent"
                        uri="https://img.icons8.com/fluency/512/home-page.png"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <SelectRow
                        spendingName="Grocery"
                        uri="https://img.icons8.com/fluency/512/ingredients.png"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <SelectRow
                        spendingName="Clothes"
                        uri="https://img.icons8.com/plasticine/512/clothes.png"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <SelectRow
                        spendingName="Shoes"
                        uri="https://img.icons8.com/parakeet/512/shoes.png"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <SelectRow
                        spendingName="Electricity"
                        uri="https://img.icons8.com/fluency/512/paid-bill.png"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <TextInput
            variant="outlined"
            label="Amount"
            style={{ marginVertical: 10 }}
            color="#12B886"
            keyboardType="numeric"
          />
          <TextInput
            variant="outlined"
            label="Add a Note (Optional)"
            color="#12B886"
            multiline={true}
            numberOfLines={10}
            style={{ marginVertical: 10 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: Dimensions.get("screen").width - 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#12B886",
    padding: 10,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
  },
  btnTxt: {
    color: "#fff",
    fontFamily: "PoppinsBold",
  },
  inputs: {
    margin: 10,
  },
  selectBtn: {
    width: Dimensions.get("screen").width - 30,
    borderWidth: 0.5,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  selectTxt: {
    fontFamily: "PoppinsBold",
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
  modalView: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width,
    padding: 20,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  selectHeading: {
    textAlign: "center",
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
  divider: {
    height: 1,
    width: Dimensions.get("screen").width - 30,
    backgroundColor: "rgba(0,0,0, 0.3)",
    marginVertical: 10,
  },
});

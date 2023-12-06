import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import DisplayRow from "../../components/DisplayRow";
import React from "react";
export default function Earnings() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.homeDiv, styles.homeSpending]}>
          {/* header row */}
          <View style={styles.row}>
            <Text style={styles.rowHeading}>All Earnings</Text>
          </View>
          {/* contents row */}
          <View>
            <DisplayRow
              uri="https://img.icons8.com/fluency/512/paid-bill.png"
              commodity="Shumia Investments"
              time="yesterday"
              amount="KES55,000"
            />
            <DisplayRow
              uri="https://img.icons8.com/fluency/512/paid-bill.png"
              commodity="Ianto Investments"
              time="yesterday"
              amount="KES105,000"
            />
            <DisplayRow />
          </View>
        </View>
      </ScrollView>
      {/* floating button */}
      <View style={[styles.footer]}>
        <View style={styles.bottomView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.bottomView}>
                <View style={{ marginVertical: 20 }}>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Spending</Text>
                    <TouchableOpacity
                      style={[styles.floatingBtn, styles.spendingBtn]}
                      onPress={() => {
                        setModalVisible(false);
                        navigation.navigate("AddSpending");
                      }}
                    >
                      <MaterialCommunityIcons
                        name="cash-minus"
                        size={20}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Earning</Text>
                    <TouchableOpacity
                      style={[styles.floatingBtn, styles.earningBtn]}
                      onPress={() => {
                        setModalVisible(false);
                        navigation.navigate("AddEarning");
                      }}
                    >
                      <MaterialCommunityIcons
                        name="cash-plus"
                        size={20}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
        {!modalVisible && (
          <TouchableOpacity
            style={styles.floatingBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      {/* end of floating button */}
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
  homeDiv: {
    margin: 15,
  },
  summHeading: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
  },
  summText: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
  homeSpending: {
    borderWidth: 0,
    width: Dimensions.get("screen").width - 30,
    padding: 10,
    borderRadius: 8,
  },
  homeEarnings: {
    borderColor: "#12B886",
    borderWidth: 1,
    width: Dimensions.get("screen").width - 30,
    padding: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  rowHeading: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
  },
  footer: {
    flex: 0,
    justifyContent: "flex-end",
    marginBottom: 10,
    height: 10,
    alignContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 10,
    width: Dimensions.get("screen").width - 30,
  },
  floatingBtn: {
    backgroundColor: "#12B886",
    padding: 10,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  modalText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PoppinsBold",
    marginHorizontal: 10,
  },
  spendingBtn: {
    width: 40,
    height: 40,
  },
  earningBtn: {
    width: 60,
    height: 60,
  },
});

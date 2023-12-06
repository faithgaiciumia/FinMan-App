import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Predictions() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.heading}>Kes 200,000</Text>
            <Text style={[styles.text, { marginHorizontal: 20 }]}>
              This Month's Net Income
            </Text>
          </View>
          <View style={styles.verticalDivider} />
          <View
            style={{
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[styles.text, { marginHorizontal: 20 }]}>
              1st Jan. 2020 - 1st Feb 2020
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Text style={styles.text}>
              <Ionicons name="md-cash" size={24} color="red" /> Spent
            </Text>
            <Text style={[styles.text, { fontFamily: "PoppinsBold" }]}>
              Kes 100,000
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              <Ionicons name="md-cash" size={24} color="green" /> Earned
            </Text>
            <Text style={[styles.text, { fontFamily: "PoppinsBold" }]}>
              Kes 300,000
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.heading}>Rent</Text>
            <Text style={[styles.text, { marginHorizontal: 20 }]}>
              This Month's Highest Spender
            </Text>
          </View>
          <View style={styles.verticalDivider} />
          <View
            style={{
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[styles.text, { marginHorizontal: 20 }]}>
              Kes 50,000
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Text style={styles.text}>
              <Ionicons name="md-cash" size={24} color="red" /> Spent
            </Text>
            <Text style={[styles.text, { fontFamily: "PoppinsBold" }]}>
              Kes 100,000
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              <Ionicons name="md-cash" size={24} color="green" /> Earned
            </Text>
            <Text style={[styles.text, { fontFamily: "PoppinsBold" }]}>
              Kes 300,000
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.heading}>Shumia Co.</Text>
            <Text style={[styles.text, { marginHorizontal: 20 }]}>
              This Month's Best Paying Client
            </Text>
          </View>
          <View style={styles.verticalDivider} />
          <View
            style={{
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[styles.text, { marginHorizontal: 20 }]}>
              Kes 150,000
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Text style={styles.text}>
              <Ionicons name="md-cash" size={24} color="red" /> Spent
            </Text>
            <Text style={[styles.text, { fontFamily: "PoppinsBold" }]}>
              Kes 100,000
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              <Ionicons name="md-cash" size={24} color="green" /> Earned
            </Text>
            <Text style={[styles.text, { fontFamily: "PoppinsBold" }]}>
              Kes 300,000
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
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
  cardContainer: {
    width: Dimensions.get("screen").width - 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3,
    padding: 10,
    margin: 10,
    borderColor: "#12B886",
    borderWidth: 1,
  },
  cardContent: {
    marginHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#12B886",
    marginVertical: 10,
  },
  viewOne: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    marginVertical: 20,
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
  heading2: {
    width: "100%",
    textAlign: "center",
    fontStyle: "bold",
    fontSize: 18,
    fontFamily: "PoppinsBold",
  },
  text: {
    marginVertical: 10,
    fontFamily: "PoppinsMedium",
    fontSize: 14,
  },
  editButton: {
    backgroundColor: "#fff",
    padding: 10,
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
    borderColor: "#12B886",
    borderWidth: 1,
  },
  editButtonText: {
    color: "#12B886",
    fontSize: 16,
    fontFamily: "PoppinsBold",
  },
  upgradeButton: {
    backgroundColor: "#fff",
    padding: 10,
    width: 150,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
    borderColor: "#12B886",
    borderWidth: 1,
  },
  upgradeButtonText: {
    color: "#12B886",
    fontSize: 12,
    fontFamily: "PoppinsBold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: Dimensions.get("screen").width - 80,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  verticalDivider: {
    height: "100%",
    width: 1,
    backgroundColor: "#12B886",
    marginHorizontal: 10,
  },
});

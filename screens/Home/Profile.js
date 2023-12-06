import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewOne}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/57298570?v=4",
            }}
            style={styles.image}
          />
          <Text style={styles.heading2}>Faith Gaiciumia</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.heading}>Personal Details</Text>
          <View style={styles.divider}></View>
          <View style={styles.cardContent}>
            <Text style={styles.text}>Full Name: Faith Gaiciumia</Text>
            <Text style={styles.text}>Username: Shumia</Text>
            <Text style={styles.text}>Email: faithgaiciumia078@gmail.com</Text>
            <Text style={styles.text}>Address: Meru, Kenya</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => alert("Edit button pressed")}
            >
              <Text style={styles.editButtonText}>Edit Personal Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.heading}>Subscription Details</Text>
          <View style={styles.divider}></View>
          <View style={styles.cardContent}>
            <Text style={styles.text}>Subscription Type: Platinum</Text>
            <Text style={styles.text}>Expiry: 8th January 2025</Text>
            <TouchableOpacity
              style={styles.upgradeButton}
              onPress={() => alert("Upgrade btn pressed")}
            >
              <Text style={styles.upgradeButtonText}>Upgrade Package</Text>
            </TouchableOpacity>
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
    fontSize: 12,
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
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

import { Text, View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DisplayRow from "../../components/DisplayRow";
import { AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";
export default function HomePage() {
  const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
  return (
    <View style={styles.container}>
      <View style={[styles.homeDiv, styles.homeSummary]}>
        <Text style={styles.summHeading}>Kes 2000</Text>
        <Text style={styles.summText}>Total Spent This Week </Text>
      </View>
      <View style={[styles.homeDiv]}>
      <BarChart data = {data} />
      </View>
      <View style={[styles.homeDiv, styles.homeSpending]}>
        {/* header row */}
        <View style={styles.row}>
          <Text style={styles.rowHeading}>Recent Spending</Text>
          <TouchableOpacity>
            <Text style={styles.summText}>View All</Text>
          </TouchableOpacity>
        </View>
        {/* contents row */}
        <View>
          <DisplayRow />
          <DisplayRow />
          <DisplayRow />
        </View>
      </View>
      <View style={[styles.homeDiv, styles.homeSpending]}>
        {/* header row */}
        <View style={styles.row}>
          <Text style={styles.rowHeading}>Recent Income</Text>
          <TouchableOpacity>
            <Text style={styles.summText}>View All</Text>
          </TouchableOpacity>
        </View>
        {/* contents row */}
        <View>
          <DisplayRow />
          <DisplayRow />
          <DisplayRow />
        </View>
      </View>
      <View style={[styles.homeDiv, styles.footer]}>
        <TouchableOpacity style={styles.floatingBtn}>
          <AntDesign name="plus" size={24} color="white" />
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
    borderColor: "#12B886",
    borderWidth: 1,
    width: Dimensions.get("screen").width - 30,
    padding: 10,
    borderRadius:8
  },
  homeEarnings: {
    borderColor: "#12B886",
    borderWidth: 1,
    width: Dimensions.get("screen").width - 30,
    padding: 10,
    borderRadius:8
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
    flex: 1,
    justifyContent: "flex-end",    
    width:Dimensions.get("screen").width-30,
    alignContent:"flex-end",
    alignItems:"flex-end"
  },
  floatingBtn:{
    backgroundColor:"#12B886",
    padding:10,
    borderRadius:100,
    width:60,
    height:60,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
  }
});

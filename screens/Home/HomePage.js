import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DisplayRow from "../../components/DisplayRow";
import { AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
export default function HomePage() {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* summary container */}
        <View style={[styles.homeDiv, styles.homeSummary]}>
          <Text style={styles.summHeading}>Kes 2000</Text>
          <Text style={styles.summText}>Total Spent This Week </Text>
        </View>
        {/* end of summary container */}
        {/* chart container */}
        <View style={[styles.homeDiv]}>
          <BarChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={Dimensions.get("window").width - 30}
            height={220}
            yAxisLabel={"Rs"}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        {/* end of chart container */}
        {/* spending container */}
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
        {/* end of spending container */}
        {/* earning container */}
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
        {/* end of earning container      */}
      </ScrollView>
      {/* floating button */}
      <View style={[styles.footer]}>
        <TouchableOpacity style={styles.floatingBtn}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
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
    borderColor: "#12B886",
    borderWidth: 1,
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
});

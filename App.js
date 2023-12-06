import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./screens/Home/Home";
import Onboarding from "./screens/onboarding/Onboarding";
import SignUp from "./screens/SignUp/SignUp";
import SignUpOne from "./screens/SignUp/SignUpOne";
import AddEarning from './screens/Create/AddEarning';
import AddSpending from './screens/Create/AddSpending';
import Profile from './screens/Home/Profile';
import Spendings from './screens/Home/Spendings';
import Earnings from './screens/Home/Earnings';
import Predictions from './screens/Home/Predictions';

export default function App() {
  const Stack = createNativeStackNavigator();

  //initialize fonts
  const [loaded] = useFonts({
    Poppins: require("./assets/Poppins/Poppins-Regular.ttf"),
    PoppinsItalic: require("./assets/Poppins/Poppins-MediumItalic.ttf"),
    PoppinsMedium: require("./assets/Poppins/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddEarning"
          component={AddEarning}
          options={{ headerShown: true, title:"Add Earning" }}
        />
        <Stack.Screen
          name="AddSpending"
          component={AddSpending}
          options={{ headerShown: true, title:"Add Spending" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true, title:"Profile" }}
        />
        <Stack.Screen
          name="Spendings"
          component={Spendings}
          options={{ headerShown: true, title:"Spendings" }}
        />
        <Stack.Screen
          name="Earnings"
          component={Earnings}
          options={{ headerShown: true, title:"Earnings" }}
        />
        <Stack.Screen
          name="Predictions"
          component={Predictions}
          options={{ headerShown: true, title:"Insights" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

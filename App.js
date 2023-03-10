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
      <Stack.Navigator initialRouteName="AddEarning">
        <Stack.Screen
          name="onboarding"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

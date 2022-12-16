import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Onboarding from "./screens/onboarding/Onboarding";

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
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

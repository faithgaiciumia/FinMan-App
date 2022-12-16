import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import ScreenFour from "./ScreenFour";
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import ScreenThree from "./ScreenThree";

export default function Onboarding(){
    return(
        <Swiper showsButtons={false} activeDotColor="#12B886" loop={false} paginationStyle={{ bottom: "13%" }} >
            <ScreenOne/>
            <ScreenTwo/>
            <ScreenThree/>
            <ScreenFour/>
        </Swiper>
    )
}
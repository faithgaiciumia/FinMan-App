import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function SelectRow({spendingName, uri}) {
  return (
    <View style={styles.row}>
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 40, height: 40, marginRight: 10 }}
      />
      <Text style={{fontFamily:"PoppinsMedium", fontSize:14}}>{spendingName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        width:Dimensions.get("screen").width -30,  
        alignContent:"center",
        alignItems:"center",
        marginVertical:10      
    }
})

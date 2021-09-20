import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem() {
  return (
    // activeOpacity 1-> onclick dont change opacity
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}
const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://th.bing.com/th/id/R.d8c88f892c58773f1d09eac0b5247d9f?rik=04nGhl484F1QjQ&pid=ImgRaw&r=0",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Farmhouse Kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);

import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <ViewCart restaurantName={route.params.name} navigation={navigation} />
    </View>
  );
}

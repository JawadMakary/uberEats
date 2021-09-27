import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const localRestaurants = [
  {
    name: "BeachSide bar",
    image_url:
      "https://th.bing.com/th/id/R.d8c88f892c58773f1d09eac0b5247d9f?rik=04nGhl484F1QjQ&pid=ImgRaw&r=0",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "BeachSide bar12",
    image_url:
      "https://th.bing.com/th/id/R.d8c88f892c58773f1d09eac0b5247d9f?rik=04nGhl484F1QjQ&pid=ImgRaw&r=0",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 1222,
    rating: 4.2,
  },
  {
    name: "BeachSide bar12",
    image_url:
      "https://th.bing.com/th/id/R.d8c88f892c58773f1d09eac0b5247d9f?rik=04nGhl484F1QjQ&pid=ImgRaw&r=0",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 1222,
    rating: 4.2,
  },
];
export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          // this is how yelpapi looks like as a response
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
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
      <Text>{props.rating}</Text>
    </View>
  </View>
);

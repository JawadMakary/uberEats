import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("San Fransisco");
  // Yelp API:
  const YELP_API_KEY =
    "Go6igxY9oFVd8Uk5IkhGzTwjvSRU6y-y2SB4XN1SeN9N6peg8MHpe6WA__HeweY8X_6wrIXUxj8oKQ2dD8ZXw-pZpFFvLRsry0pOfBxMRUwVdvGjwj2KLwuYsFNMYXYx";
  // get yelpapi -> getjson from hip -> set json data in restaurant data
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import RestaurantItem from "../components/RestaurantItem";
export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}

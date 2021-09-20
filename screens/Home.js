import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
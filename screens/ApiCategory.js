import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  sportsAPIs,
  eventAPIs,
  animalsApis,
  animeApis,
  artdesignApis,
  blockchainApis,
  booksApis,
  businessApis,
  calenderApis,
  cloudstoragefilwsharingApis,
  continousintegrationApis,
  currencyExchangeApis,
  dataValidationApis,
  developmentApis,
  dictionariesApis,
  entertainmentApis,
  environmentApis,
  financeApis,
  foodDrinkApis,
  gamesandcomicsApis,
  governmentApis,
} from "../api/api";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";

const ApiCategory = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  function handlePress(apiRes) {
    navigation.navigate("apiListing", {
      apiRes: apiRes,
    });
  }
  function handleCategory(text) {
    setCategory(text);
  }
  function randomColor() {
    let clrStr = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + clrStr[Math.round(Math.random() * 16)];
    }
    return color;
  }
  const categories = [
    { name: "Sports", api: sportsAPIs, id: 1 },
    { name: "Event", api: eventAPIs, id: 2 },
    { name: "Animal", api: animalsApis, id: 3 },
    { name: "Anime", api: animeApis, id: 4 },
    { name: "Art and Design", api: artdesignApis, id: 5 },
    { name: "Blockchain", api: blockchainApis, id: 6 },
    { name: "Books", api: booksApis, id: 7 },
    { name: "Business", api: businessApis, id: 8 },
    { name: "Calendar", api: calenderApis, id: 9 },
    {
      name: "Cloud Storage and File Sharing",
      api: cloudstoragefilwsharingApis,
      id: 10,
    },
    { name: "Continuous Integration", api: continousintegrationApis, id: 11 },
    { name: "Currency Exchange", api: currencyExchangeApis, id: 12 },
    { name: "Data Validation", api: dataValidationApis, id: 13 },
    { name: "Development", api: developmentApis, id: 14 },
    { name: "Dictionaries", api: dictionariesApis, id: 15 },
    { name: "Entertainment", api: entertainmentApis, id: 16 },
    { name: "Environment", api: environmentApis, id: 17 },
    { name: "Finance", api: financeApis, id: 18 },
    { name: "Food and Drink", api: foodDrinkApis, id: 19 },
    { name: "Games and Comics", api: gamesandcomicsApis, id: 20 },
    { name: "Government", api: governmentApis, id: 21 },
  ];
  const searchedCategory = categories.filter((cat) =>
    cat.name.toLocaleLowerCase().includes(category.toLocaleLowerCase())
  );
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        API Categories
      </Text>
      <TextInput
        placeholder="Search Categories"
        onChangeText={handleCategory}
        value={category}
        style={{
          borderWidth: 2,
          borderRadius: 5,
          padding: 2,
          margin: 10,
        }}
      />
      <ScrollView>
        {searchedCategory.map((cat) => (
          <TouchableOpacity
            onPress={() => handlePress(cat.api)}
            key={cat.id}
            style={{
              backgroundColor: randomColor(),
              height: 40,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "2" }}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <TouchableOpacity onPress={() => handlePress(sportsAPIs)}>
        <Text>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(eventAPIs)}>
        <Text>Event </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(animalsApis)}>
        <Text>Animal </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(animeApis)}>
        <Text>Anime </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(artdesignApis)}>
        <Text>Art and Design </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(blockchainApis)}>
        <Text>Blockchain </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(booksApi)}>
        <Text>Books</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(businessApis)}>
        <Text>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(calenderApis)}>
        <Text>Calender</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress(cloudstoragefilwsharingApis)}
      >
        <Text>Cloud Storage and File Sharing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(continousintegrationApis)}>
        <Text>Continuos Integration</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(currencyExchangeApis)}>
        <Text>Currency Exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(dataValidationApis)}>
        <Text>Data Validation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(developmentApis)}>
        <Text>Development</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(dictionariesApis)}>
        <Text>Dictionaries</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(entertainmentApis)}>
        <Text>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(environmentApis)}>
        <Text>Environment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(financeApis)}>
        <Text>Finance</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(foodDrinkApis)}>
        <Text>Food and Drink</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(gamesandcomicsApis)}>
        <Text>Games and Comics</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(governmentApis)}>
        <Text>Government</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ApiCategory;

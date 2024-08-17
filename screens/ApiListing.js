import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Linking } from "react-native";
import WebView from "react-native-webview";
import { Modal } from "react-native";
const ApiListing = () => {
  const route = useRoute();
  const apiArrInObj = route.params.apiRes;
  // const [modalVisible, setModalVisible] = useState(false);

  // function showWebView() {
  //   setModalVisible(true);
  // }

  function handleArrObj({ item }) {
    return (
      <View
        style={{
          padding: 10,
          marginVertical: 10,
          backgroundColor: "#f9f9f9",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <Text>Number: {item.id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Require Key : {item.requiresKey ? "True" : "False"}</Text>
        <Text>Support CORS : {item.supportCORS ? "True" : "False"}</Text>
        <Text>Supports HTTPS : {item.supportsHTTPS ? "True" : "False"}</Text>
        <Text>Description : {item.description}</Text>

        <TouchableOpacity
          onPress={() => Linking.openURL(item.link)}
          style={{
            backgroundColor: "red",
            padding: "4",
            width: 80,
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            View Docs
          </Text>
        </TouchableOpacity>
        {/* {modalVisible && (
          <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            animationType="slide"
          >
            <WebView source={{ uri: item.link }} style={{ flex: 1 }} />
          </Modal>
        )} */}
      </View>
    );
  }

  return (
    <FlatList
      data={apiArrInObj}
      renderItem={handleArrObj}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ApiListing;

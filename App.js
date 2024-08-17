import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ApiCategory from "./screens/ApiCategory";
import ApiListing from "./screens/ApiListing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="apiCategory"
            component={ApiCategory}
          />
          <Stack.Screen
            options={{
              title: "Api Listing",
            }}
            name="apiListing"
            component={ApiListing}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 1,
    paddingTop: 2,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

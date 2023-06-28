import Home from "../components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../components/SearchScreen";
import { Image, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#0077b6" }}>
        <Tab.Screen
          name="World News"
          component={Home}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
            tabBarLabel: "",
            headerStyle: {
              height: 55,
            },
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 60, marginTop: -65 }}
                source={require("../assets/news.png")}
              />
            ),
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={24} color="black" />
            ),
            tabBarLabel: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

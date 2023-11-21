import { NavigationContainer } from "@react-navigation/native";
import { Feed1 } from "./screens/Feed1";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Feed1} />
      <Tab.Screen name="Search" component={Feed1} />
      <Tab.Screen name="Post" component={Feed1} />
      <Tab.Screen name="Like" component={Feed1} />
      <Tab.Screen name="About" component={Feed1} />
    </Tab.Navigator>
  );
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};

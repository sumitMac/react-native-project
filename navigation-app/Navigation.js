import { NavigationContainer } from "@react-navigation/native";
import { Feed1 } from "./screens/Feed1";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed1" component={Feed1} />
      <Tab.Screen name="Feed2" component={Feed1} />
      <Tab.Screen name="Feed3" component={Feed1} />
      <Tab.Screen name="Feed4" component={Feed1} />
      <Tab.Screen name="Feed5" component={Feed1} />
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

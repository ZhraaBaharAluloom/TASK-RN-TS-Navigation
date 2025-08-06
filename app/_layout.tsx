import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1abc9c",
      }}
    >
      <Tabs.Screen
        name="stays"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="bed-king-outline"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="wallet-travel"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}

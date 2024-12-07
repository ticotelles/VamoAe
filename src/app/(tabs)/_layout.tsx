import { Tabs } from "expo-router";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { colors } from "@//styles/colors";



export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[100],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle:{
            backgroundColor: colors.gray[100],
            paddingTop: 4
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size }) => <Feather name="home" size={24} />,
        }}
      />

      <Tabs.Screen
        name="oferecer"
        options={{
          tabBarIcon: ({ size }) => (
            // <Feather name="" size={20} />
            <MaterialCommunityIcons name="offer" size={30} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="pedir"
        options={{
          tabBarIcon: ({ size }) => (
            // <Feather name="" size={20} />
            <FontAwesome5 name="thumbs-up" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}

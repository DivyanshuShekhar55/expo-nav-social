import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { TouchableOpacity, View, Text } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";


const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Layout() {
    
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          drawerContentStyle: { backgroundColor: "black" },
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "transparent",
          drawerInactiveTintColor:"white",
          drawerHideStatusBarOnOpen: true,
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 18 }}>MySocial</Text>
          ),
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: "black" }} />
          ),
          drawerLabelStyle: {
            fontSize: 18,
            fontWeight: "medium",
            marginLeft: "10%",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
              style={{ paddingHorizontal: 18 }}
            >
              <Image
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
                aria-hidden
                style={{ width: 30, height: 30, borderRadius: 30 }}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen
          name="(home-bottom-nav)" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons name="home-outline" color="white" size={24} />
            ),
            drawerLabel: "Home",
            title: "overview",
          }}
        />

        <Drawer.Screen
          name="Profile" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons name="person-outline" color="white" size={24} />
            ),
            drawerLabel: "Profile",
            title: "profile",
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}

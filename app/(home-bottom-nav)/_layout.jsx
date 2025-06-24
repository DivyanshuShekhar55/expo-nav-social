import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable, TouchableWithoutFeedback, View } from 'react-native';
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import * as NavigationBar from 'expo-navigation-bar';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: "gray",
      tabBarStyle: { backgroundColor: "black" },
      headerShown: false,
      tabBarButton: (props) => (
        <Pressable {...props} android_ripple={null}>
          <View style={{ flex: 1, alignItems: "center" }}>{props.children}</View>
        </Pressable>
      ),
    }}>
      <Tabs.Screen
        name="(home-feed-top-nav)"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"} color={"white"} />,

        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={!focused ? "notifications-outline" : "notifications"} color={"white"} />,
        }}
      />
    </Tabs>
  );
}
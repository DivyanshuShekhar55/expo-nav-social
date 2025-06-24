import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable, TouchableWithoutFeedback, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor:"black",
      headerShown:false,
     tabBarButton: (props) => (
      <Pressable {...props} android_ripple={null}>
        <View style={{ flex: 1, alignItems:"center" }}>{props.children}</View>
      </Pressable>
    ),
     }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={!focused?"home-outline":"home"} color={"black"} />,
          
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={!focused?"notifications-outline":"notifications"} color={"black"} />,
        }}
      />
    </Tabs>
  );
}
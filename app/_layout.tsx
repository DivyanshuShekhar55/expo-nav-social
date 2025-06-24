import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {Ionicons} from "@expo/vector-icons"

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        drawerContentStyle:{backgroundColor:"black"},
        drawerActiveTintColor:"white",
        drawerActiveBackgroundColor:"transparent",
        drawerHideStatusBarOnOpen:true,
        drawerLabelStyle:{fontSize:18, fontWeight:'medium', marginLeft:'10%', fontFamily:"Inter"}
      }}>

        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerIcon:({focused})=>(
              <Ionicons name="home" color="white" size={24} />
            ),
            drawerLabel: "Home",
            title: "overview"
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}

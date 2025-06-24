import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import index from './index';


const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle:{backgroundColor:"black"}
                ,tabBarActiveTintColor:"white"
                ,tabBarInactiveTintColor:"gray"
            }}
            >

            <TopTab.Screen name="For Me" component={index} />
            <TopTab.Screen name="Following" component={index} />

        </TopTab.Navigator>
    );
}
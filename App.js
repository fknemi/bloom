import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SCREENS from "./app/enums/screens";
import { DashboardScreenNavigator, EditorScreenNavigator, SearchScreenNavigator, FilterScreenNavigator, SettingsScreenNavigator } from "./app/components/navigator/Navigator";
import HomeIcon from "./app/components/icons/HomeIcon";
import PenIcon from "./app/components/icons/PenIcon";
import FilterIcon from "./app/components/icons/FilterIcon";
import SearchIcon from "./app/components/icons/SearchIcon";
import { Text, View, StatusBar } from "react-native";
import useFonts from "./app/utils/useFonts"
import { useEffect } from "react";
// {{
//   headerShown: false,
//   tabBarStyle: {
//     backgroundColor: "#D5C9B9",

//   },
//         tabBarLabelStyle: {
//             color: "#000",
//             textTransform: "capitalize",
//                 textAlign: "center",

//         }

// }


// }


















const Tab = createBottomTabNavigator()

export default function App() {

        const fonts = useFonts();

        if (!fonts) {
            return <View><Text>Loading</Text></View>

        }


    return (
        <NavigationContainer>
 <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
        
      />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        return <Text className={`${focused ? "color-black" : "color-peach-dark"} font-pixer capitalize mb-2 text-lg`} >{route.name}</Text>
                    },
                    tabBarStyle: {
                        height: 80,
                        backgroundColor: "#D5C9B9",

                    },
                    headerShown: false
                }
                )}

            // tabBarIcon: ({ focused }) => {
            // let iconSource;

            // if (route.name === 'Map') {
            //   iconSource = require('./assets/public.png');
            // } else if (route.name === 'List') {
            //   iconSource = require('./assets/numbered.png');
            // } else if (route.name === 'Log') {
            //   iconSource = require('./assets/menu.png');
            // } else if (route.name === 'Talk') {
            //   iconSource = require('./assets/chat.png');
            // } else if (route.name === 'Account') {
            //   iconSource = require('./assets/account.png');
            // } 

            // const icon = <Image
            //   style={{
            //     width: 25,
            //     height: 25,
            //     tintColor: focused ? colors.primary : colors.inactive,
            //     marginTop: focused ? 5 : 15
            //   }}
            //   source={iconSource}
            // /> ;

            // return icon
            // },

            >

                <Tab.Screen name={SCREENS.DASHBOARD_SCREEN} component={DashboardScreenNavigator} options={{
                    tabBarIcon: ({ focused }) => <HomeIcon route={focused} />
                }} />
                <Tab.Screen name={SCREENS.EDITOR_SCREEN} component={EditorScreenNavigator} options={{
                    tabBarIcon: ({ focused }) => <PenIcon focused={focused} />
                }} />
                <Tab.Screen name={SCREENS.SEARCH_SCREEN} component={SearchScreenNavigator} options={{
                    tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />
                }} />
                <Tab.Screen name={SCREENS.FILTER_SCREEN} component={FilterScreenNavigator} options={{
                    tabBarIcon: ({ focused }) => <FilterIcon focused={focused} />
                }} />
            </Tab.Navigator>


        </NavigationContainer>
    );
}

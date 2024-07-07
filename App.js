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
                    tabBarIcon: ({ focused }) => {
                        if (route.name === SCREENS.DASHBOARD_SCREEN) {
                            return <HomeIcon focused={focused} />
                        } else if (route.name === SCREENS.EDITOR_SCREEN) {
                            return <PenIcon focused={focused} />
                        } else if (route.name === SCREENS.SEARCH_SCREEN) {
                            return <SearchIcon focused={focused} />
                        } else if (route.name === SCREENS.FILTER_SCREEN) {
                            return <FilterIcon focused={focused} />
                        }
                    },

                    tabBarStyle: {
                        height: 80,
                        backgroundColor: "#D5C9B9",

                    },
                    headerShown: false
                })
                }
            >

                <Tab.Screen name={SCREENS.DASHBOARD_SCREEN} component={DashboardScreenNavigator} options={{

                }} />
                <Tab.Screen name={SCREENS.EDITOR_SCREEN} component={EditorScreenNavigator} options={{

                }} />
                <Tab.Screen name={SCREENS.SEARCH_SCREEN} component={SearchScreenNavigator} options={{

                }} />
                <Tab.Screen name={SCREENS.FILTER_SCREEN} component={FilterScreenNavigator} options={{

                }} />
            </Tab.Navigator>


        </NavigationContainer>
    );
}

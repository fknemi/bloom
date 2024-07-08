import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SCREENS from "./app/enums/screens";
import { DashboardScreenNavigator, EditorScreenNavigator, SearchScreenNavigator, FilterScreenNavigator, SettingsScreenNavigator } from "./app/components/navigator/Navigator";
import HomeIcon from "./app/components/icons/HomeIcon";
import PenIcon from "./app/components/icons/PenIcon";
import FilterIcon from "./app/components/icons/FilterIcon";
import SearchIcon from "./app/components/icons/SearchIcon";
import { Text, View, StatusBar } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, loadAsync} from 'expo-font'
import { useCallback, useEffect, useState } from "react";
SplashScreen.preventAutoHideAsync()

const Tab = createBottomTabNavigator()

export default function App() {

    const [fontsLoaded] = useFonts({
        gully_bold: require('./assets/fonts/gully/otf/gully_bold.otf'),
        gully_medium: require('./assets/fonts/gully/otf/gully_medium.otf'),
        gully_regular: require('./assets/fonts/gully/otf/gully_regular.otf'),
        gully_light: require('./assets/fonts/gully/otf/gully_light.otf'),
        super_sunshine: require('./assets/fonts/super_sunshine/ttf/super_sunshine.ttf'),
        pixer: require('./assets/fonts/pixer/ttf/pixer.ttf'),
      })
  
      const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare() {
            try{
                loadAsync({
                    gully_bold: require('./assets/fonts/gully/otf/gully_bold.otf'),
                    gully_medium: require('./assets/fonts/gully/otf/gully_medium.otf'),
                    gully_regular: require('./assets/fonts/gully/otf/gully_regular.otf'),
                    gully_light: require('./assets/fonts/gully/otf/gully_light.otf'),
                    super_sunshine: require('./assets/fonts/super_sunshine/ttf/super_sunshine.ttf'),
                    pixer: require('./assets/fonts/pixer/ttf/pixer.ttf'),
                })
                await new Promise(resolve => setTimeout(resolve, 2000))

            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
                                                    
            }
        }
        prepare()
    },[])
const onLayoutRootView = useCallback(async () => {

    if(appIsReady){
        await SplashScreen.hideAsync()

    }

},[appIsReady])
onLayoutRootView()
if(!appIsReady){
    return null
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

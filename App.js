import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SCREENS from "./app/enums/screens";
import { DashboardScreenNavigator, EditorScreenNavigator, SearchScreenNavigator, FilterScreenNavigator, SettingsScreenNavigator } from "./app/components/navigator/Navigator";
import HomeIcon from "./app/components/icons/HomeIcon";
import PenIcon from "./app/components/icons/PenIcon";
import FilterIcon from "./app/components/icons/FilterIcon";
import SearchIcon from "./app/components/icons/SearchIcon";



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false
  }} className="bg-peach-100">
        <Tab.Screen name={SCREENS.DASHBOARD_SCREEN} component={DashboardScreenNavigator} options={{
          tabBarIcon: () => <HomeIcon/>
        }} />
        <Tab.Screen name={SCREENS.EDITOR_SCREEN} component={EditorScreenNavigator} options={{
          tabBarIcon: () => <PenIcon/>
        }} /> 
        <Tab.Screen name={SCREENS.SEARCH_SCREEN} component={SearchScreenNavigator} options={{
          tabBarIcon: () => <SearchIcon/>
        }} /> 
        <Tab.Screen name={SCREENS.FILTER_SCREEN} component={FilterScreenNavigator} options={{
          tabBarIcon: () => <FilterIcon/>
        }} /> 
      </Tab.Navigator>
      

    </NavigationContainer>
  );
}

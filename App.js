import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SCREENS from "./app/enums/screens";
import { DashboardScreenNavigator, EditorScreenNavigator, SearchScreenNavigator, FilterScreenNavigator, SettingsScreenNavigator } from "./app/components/navigator/Navigator";
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
        <Tab.Screen name={SCREENS.DASHBOARD_SCREEN} component={DashboardScreenNavigator}  />
        <Tab.Screen name={SCREENS.EDITOR_SCREEN} component={EditorScreenNavigator} />
        <Tab.Screen name={SCREENS.SEARCH_SCREEN} component={SearchScreenNavigator} />
        <Tab.Screen name={SCREENS.FILTER_SCREEN} component={FilterScreenNavigator} />
      </Tab.Navigator>
      

    </NavigationContainer>
  );
}

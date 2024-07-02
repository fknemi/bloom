import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SCREENS from "../../enums/screens";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import EditorScreen from "../../screens/editor/EditorScreen";
import FilterScreen from "../../screens/filter/FilterScreen";
import SearchScreen from "../../screens/search/SearchScreen";
import SettingsScreen from "../../screens/settings/SettingsScreen";
import NestedScreen from "./NestedScreen"

const Stack = createNativeStackNavigator();


export const DashboardScreenNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
        <Stack.Screen name={`STACK_${SCREENS.DASHBOARD_SCREEN}`} component={DashboardScreen} />
        <Stack.Screen name={`NESTED_${SCREENS.DASHBOARD_SCREEN}`} component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
export const EditorScreenNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>        
        <Stack.Screen name={`STACK_${SCREENS.EDITOR_SCREEN}`} component={EditorScreen} />
        <Stack.Screen name={`NESTED_${SCREENS.EDITOR_SCREEN}`} component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
export const SearchScreenNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name={`STACK_${SCREENS.SEARCH_SCREEN}`} component={SearchScreen} />
        <Stack.Screen name={`NESTED_${SCREENS.SEARCH_SCREEN}`} component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
export const FilterScreenNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name={`STACK_${SCREENS.FILTER_SCREEN}`} component={FilterScreen} />
        <Stack.Screen name={`NESTED_${SCREENS.FILTER_SCREEN}`} component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}

export const SettingsScreenNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name={`STACK_${SCREENS.SETTINGS_SCREEN}`} component={SettingsScreen} />
        <Stack.Screen name={`NESTED_${SCREENS.SETTINGS_SCREEN}`} component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name={SCREENS.DASHBOARD_SCREEN} component={DashboardScreen} />
  //       <Stack.Screen name={SCREENS.EDITOR_SCREEN} component={EditorScreen} />
  //       <Stack.Screen name={SCREENS.SEARCH_SCREEN} component={SearchScreen} />
  //       <Stack.Screen name={SCREENS.FILTER_SCREEN} component={FilterScreen} />
  //       <Stack.Screen name={SCREENS.SETTINGS_SCREEN} component={SettingsScreen} />
  //       <Stack.Screen name={`NESTED_${SCREENS.SETTINGS_SCREEN}`} component={NestedScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );



  // <Stack.Screen name={SCREENS.DASHBOARD_SCREEN} component={DashboardScreen} />
  // <Stack.Screen name={SCREENS.EDITOR_SCREEN} component={EditorScreen} />
  // <Stack.Screen name={SCREENS.SEARCH_SCREEN} component={SearchScreen} />
  // <Stack.Screen name={SCREENS.FILTER_SCREEN} component={FilterScreen} />
  // <Stack.Screen name={SCREENS.SETTINGS_SCREEN} component={SettingsScreen} />
  // <Stack.Screen name={`NESTED_${SCREENS.SETTINGS_SCREEN}`} component={NestedScreen} />

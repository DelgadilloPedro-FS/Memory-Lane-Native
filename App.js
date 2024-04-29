import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import EditJournalScreen from "./Screens/EditJournalScreen";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator , useNavigation} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="EditJournal" component={EditJournalScreen} options={{ title: 'Edit Journal' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from '../contacts/index';
import Information from '../information/index';
import UserForm from '../form/UserForm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ContactsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Listagem" component={Contacts} />
            <Stack.Screen name="Informações" component={Information} />
        </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Contatos' component={ContactsStack} />
                <Tab.Screen name='Adicionar' component={UserForm} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

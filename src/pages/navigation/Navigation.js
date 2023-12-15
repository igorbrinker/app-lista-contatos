import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from '../contacts/index';
import Information from '../information/index';
import UserForm from '../form/UserForm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

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
                <Tab.Screen 
                    name='Contatos' 
                    component={ContactsStack} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="address-book" size={25} color={color} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Adicionar' 
                    component={UserForm} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="plus-square" size={25} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

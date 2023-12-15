import { Text, View, FlatList } from 'react-native'
import styles from './style'
import { ListItem, Avatar } from 'react-native-elements'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contacts = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersData = await AsyncStorage.getItem('users');
                console.log('Users data from AsyncStorage:', usersData); // Add this line
                if (usersData !== null) {
                    setUsers(JSON.parse(usersData));
                }
            } catch (error) {
                console.error('Error retrieving data', error);
            }
        };
    
        loadUsers();
    }, []);
    

    function getUserItem({ item: user }) {
        return (
            <View style={{ flex: 1 }}>
                <ListItem key={user.id} bottomDivider onPress={() => navigation.navigate('Informações', { user })}>
                    <Avatar rounded size='large' source={{ uri: user.avatarUrl }} />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
        );
    }

    return (
        <View style={styles.viewContact}>
        <FlatList
            data={users}
            keyExtractor={(item) => item.id ? item.id.toString() : `_${Math.random().toString(36).substr(2, 9)}`}
            renderItem={getUserItem}
        />
    </View>
    )
}

export default Contacts;

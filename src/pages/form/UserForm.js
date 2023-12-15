import React, { useState, useContext } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native'; // Import FlatList and Text
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from './UserContext';

const UserForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        avatarUrl: '',
      });

    const handleSubmit = async () => {
        try {
          const existingUsers = await AsyncStorage.getItem('users');
          const parsedUsers = JSON.parse(existingUsers) || [];
      
          const newUser = {
            id: Date.now(),
            ...userData,
          };
      
          const updatedUsers = [...parsedUsers, newUser];
      
          await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

          setUserData({ name: '', email: '', avatarUrl: '' });

        } catch (error) {
          console.error('Error saving user:', error);
        }
      };
      

      return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={userData.name}
                onChangeText={(name) => setUserData({ ...userData, name })}
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço de Email"
                value={userData.email}
                onChangeText={(email) => setUserData({ ...userData, email })}
            />
            <TextInput
                style={styles.input}
                placeholder="Foto de Perfil"
                value={userData.avatarUrl}
                onChangeText={(avatarUrl) => setUserData({ ...userData, avatarUrl })}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default UserForm;
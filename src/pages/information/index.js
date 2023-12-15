import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { Card, Avatar } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Information({ route, navigation }) {
    const user = route.params?.user;

    const deleteUser = async () => {
        try {
            const existingUsersJSON = await AsyncStorage.getItem('users');
            let existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

            const updatedUsers = existingUsers.filter(u => u.id !== user.id);

            await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

            navigation.goBack();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.avatar}>
                    <Avatar rounded size='xlarge' source={{ uri: user.avatarUrl }} />
                </View>
                <Card.Title style={styles.cardTitle}>{user.name}</Card.Title>
                <Card.Divider />
                <View>
                    <Text style={styles.infoText}>Informações do contato</Text>
                    <Text style={styles.text}>Nome: {user.name}</Text>
                    <Text style={styles.text}>E-mail: {user.email}</Text>
                </View>
            </Card>
            <TouchableOpacity
                style={[styles.button, styles.roundButton]}
                onPress={deleteUser}
            >
                <FontAwesome name='trash' size={23} color='#fff' />
                <Text style={styles.buttonText}>Apagar Contato</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome name='arrow-left' size={23} color='#fff' />
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const roundButtonStyles = {
    roundButton: {
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 90,
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        marginLeft: 10,
    },
};

Object.assign(styles, roundButtonStyles);

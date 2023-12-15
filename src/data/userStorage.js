import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveUsers } from './userStorage';

export const saveUsers = async (users) => {
  try {
    const existingUsersJSON = await AsyncStorage.getItem('users');
    let existingUsers = [];

    if (existingUsersJSON) {
      existingUsers = JSON.parse(existingUsersJSON);
    }

    const usersWithIDs = users.map((user) => ({
      ...user,
      id: user.id.toString(),
    }));

    const updatedUsers = [...existingUsers, ...usersWithIDs];

    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

    console.log('Users saved successfully:', updatedUsers);
  } catch (error) {
    console.error('Error saving users:', error);
  }
};

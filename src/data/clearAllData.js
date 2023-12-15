import AsyncStorage from '@react-native-async-storage/async-storage';

const deleteUser = async (userId) => {
  try {
    const existingUsersJSON = await AsyncStorage.getItem('users');
    let existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    const updatedUsers = existingUsers.filter(user => user.id !== userId);

    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

    console.log(`Usuário com o id: ${userId} deletado com sucesso!`);
  } catch (error) {
    console.error('Erro ao deletar o usuário:', error);
  }
};
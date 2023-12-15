import React from 'react';
import AppNavigator from './src/pages/navigation/Navigation';
import { UserProvider } from './src/pages/form/UserContext';
const App = () => {
    return (
        <UserProvider>
            <AppNavigator />
        </UserProvider>
    );
};

export default App;
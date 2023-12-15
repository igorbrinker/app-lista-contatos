import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        margin: 20,
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        margin: 20,
        height: 50,
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10
    },
    avatar: {
        alignItems: "center"
    },
    cardTitle: {
        marginTop: 20,
        fontSize: 18,
        color: '#007AFF',
    },
    infoText: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'gray',
    },
    text: {
        marginBottom: 10
    },
});

export default styles;

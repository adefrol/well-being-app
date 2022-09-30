import { StyleSheet, TextInput } from "react-native";

interface InputProps {
    value?: string;
    placeholder: string;
}

const Input = ({value, placeholder}: InputProps) => {
    return (
        <TextInput style={styles.input} returnKeyType={"next"} placeholder={placeholder} placeholderTextColor={'#ffbb6e'} >
            {value}
        </TextInput>
    );


};
const styles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#fff',
        borderRadius: 30,
        color: '#ff941a',
        width: '80%',
        height: 40,
        marginTop: '10%',
        textAlign: 'center',
    },
});

export default Input;
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewBase, KeyboardAvoidingViewComponent, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, TouchableOpacity } from 'react-native';
import Input from './componets/Input';

const App = () => {


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyavoid}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.auth}>
                            Авторизация
                        </Text>
                        <Input value='adefrolx@gmail.com' placeholder='E-mail' />
                        <Input value='12345' placeholder='Пароль' />
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <Text style={{ color: '#ff941a', textDecorationLine: 'underline' }}>Забыли пароль?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.enter}>
                            <Text style={{
                                ...Platform.select({
                                    ios: {
                                        lineHeight: 50
                                    },
                                    android: {}
                                }),
                                textAlign:'center',
                                color: 'white'
                            }} >Войти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        justifyContent: 'center',
    },

    main: {
        height: '50%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },

    auth: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 25,
        marginTop: 15,
        color: '#ff941a',
    },
    keyavoid: {
        flex: 1,
    },

    enter: {
        width: 150,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        backgroundColor: '#ff941a',
        marginTop: 50,
        borderRadius: 30,

        shadowColor: "#d15102",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.62,
        elevation: 4,
    }
});

export default App;
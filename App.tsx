import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewBase, KeyboardAvoidingViewComponent, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, TouchableOpacity, ImageBackground } from 'react-native';
import Input from './componets/Input';
import RegPassBtn from './componets/RegPassBtn';

const background = require('./assets/background.jpg')

const App = () => {


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyavoid}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar style='dark' />
                    <ImageBackground source={background} resizeMode='cover' style={styles.background}>
                        <View style={styles.main}>
                            <Text style={styles.auth}>
                                Авторизация
                            </Text>
                            <Input value='adefrolx@gmail.com' placeholder='E-mail' />
                            <Input value='12345' placeholder='Пароль' />
                            <RegPassBtn value='Забыли пароль?'
                                marginTop={10} />
                            <TouchableOpacity style={styles.enter}>
                                <Text style={styles.enter__text} >Войти</Text>
                            </TouchableOpacity>
                            <RegPassBtn value='Регистрация'
                                marginTop={15}
                                fontSize={16} />
                        </View>
                    </ImageBackground>
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

    background: {
        flex: 1,
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.13,
        shadowRadius: 2.62,
        elevation: 4,

    },

    auth: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 25,
        marginTop: 30,
        color: '#ff941a',
    },
    keyavoid: {
        flex: 1,
    },

    enter: {
        width: 200,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        backgroundColor: '#ff941a',
        marginTop: 50,
        borderRadius: 30,

        shadowColor: "#ff8e2b",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 7.62,
        elevation: 4,
    },

    enter__text: {
        ...Platform.select({
            ios: {
                lineHeight: 40
            },
            android: {}
        }),
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
        fontSize: 17,
    }
});

export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './componets/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.auth}>
          Авторизация
        </Text>
        <Input></Input>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#000',
    justifyContent: 'center',
  },

  main: {
    height: '50%',
    width: '100%',
    backgroundColor: '#fff',
    alignSelf:'flex-end',
    position: 'absolute',
    bottom:0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },

  auth:{
    textAlign:'center',
    fontWeight:'800',
    fontSize: 25,
    marginTop: 15,
    color:'#ff941a',
  },
});

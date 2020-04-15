import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image , KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants'

import Logo from '../../assets/firechat.png'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const navigation = useNavigation()

    function goToHome() {
        return navigation.navigate('Home')
    }

  return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.containerKeyBoard}  >
            <View style={styles.containerLogo} >
                <Image source={Logo} width={80} height={100} style={styles.imgLogo} ></Image>
            </View>
            <View style={styles.containerInputs} >
                <View style={styles.inputGroup} >
                    <Text style={styles.textInputs} >NOME*</Text>
                    <TextInput placeholder="Put your e-mail here" value={name} onChangeText={setName} style={styles.input} ></TextInput>
                </View>
                <View style={styles.inputGroup} >
                    <Text style={styles.textInputs} >TELEFONE*</Text>
                    <TextInput placeholder="Put your e-mail here" value={name} onChangeText={setName} style={styles.input} ></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.btnLogin} onPress={goToHome} >
                <Text style={styles.textBtnLogin} >Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>      
      </View>
    
  );
}

const styles = StyleSheet.create({
    containerKeyBoard: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 80

    },
    container:{
        flex: 1,
        paddingHorizontal: 12,
        paddingBottom: 40,
        backgroundColor: "#fff"/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    }, 
    imgLogo: {
        width: 180,
        height: 200
    },  
    containerLogo : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    containerInputs : {
        alignItems: 'center',
        marginTop: 40
    },
    inputGroup : {
        paddingVertical: 8
    }, 
    input : {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        width: 320,
        marginVertical: 8,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 18,
        elevation: 5
    },
    textInputs: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F05944'
    },
    btnLogin: {
        width: 320,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "#F05944",
        justifyContent: 'center',
        alignItems: 'center',
        top: 80
    },
    textBtnLogin: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26,
    }
})
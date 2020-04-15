import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import IconUser from '../../assets/icon-user.png'

export default function Conversations() {

  const navigator = useNavigation()

  function goToContacts() {
    navigator.navigate('Contatos')
  }

  function goToChatWith() {
    navigator.navigate('Chat')
  }

  return (
    <View style={styles.container} >
      
      
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => (
          <TouchableOpacity style={styles.chatButton} onPress={goToChatWith} >
            <View style={styles.chatButtonItem} >
              <Image source={IconUser} height={50} width={50} style={styles.userIcon} ></Image>
              <View style={styles.labelsChatButton} >
                <Text style={styles.titleLabelChat} >Nome da pessoa</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

     

        <TouchableOpacity style={styles.floatingButton} onPress={goToContacts} >
          <Ionicons name="ios-add" size={60} color={"#fff"} />
        </TouchableOpacity>
    </View>
  );
}


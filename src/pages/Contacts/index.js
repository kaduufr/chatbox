import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList , TouchableOpacity, Image} from 'react-native';
import * as ContactPhone from 'expo-contacts';
import { styles } from './styles'
import IconUser from '../../assets/icon-user.png'
import { useNavigation } from '@react-navigation/native'

export default function Contacts() {

  const [contacts, setContacts] = useState([])
  const navigator = useNavigation()
  useEffect(() => {
    (async () => {
      const {status} = await ContactPhone.requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await ContactPhone.getContactsAsync({
          fields: [ContactPhone.PHONE_NUMBERS]
        })
        
        if (data.length > 0) {
          setContacts(data)
        }
      }
    })()
  }, [])

  function goToChatWith() {
    navigator.navigate('Chat')
  }

  return (
    <View style={styles.container} >
      <FlatList
        data={contacts}
        keyExtractor={contact => String(contact.id)}
        renderItem={ ({item: contact}) => (
          <TouchableOpacity style={styles.chatButton} onPress={goToChatWith} >
            <View style={styles.chatButtonItem} >
              <Image source={IconUser} height={50} width={50} style={styles.userIcon} ></Image>
              <View style={styles.labelsChatButton} >
              <Text style={styles.titleLabelChar} >{contact.name ? contact.name : contact.id}</Text>
              <Text style={styles.textLabelChar}> {contact.phoneNumbers[0].number} </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


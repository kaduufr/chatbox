import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import {styles} from './styles'
import IconUser from '../../assets/icon-user.png'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image source={IconUser} style={styles.userImage} ></Image>
      <Text style={styles.textUserName}>Kadu Ferreira</Text>

      <TouchableOpacity style={styles.floatingButton} >
          <MaterialIcons name="edit" size={35} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 12
    },
    chatButton: {
        paddingHorizontal: 16,
        borderBottomColor: '#BDBEBE',
        borderBottomWidth: 1,
        paddingVertical: 8,
      },
      chatButtonItem: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      labelsChatButton: {
          left: 16
      },
     
      titleLabelChar: {
          fontWeight: 'bold',
          fontSize: 18
      },
      userIcon: {
          width: 60,
          height: 60,
      },
      textLabelChar: {
          fontSize: 16,
          fontStyle: 'italic'
      }
})
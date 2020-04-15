import { StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Constants.statusBarHeight + 10,
      paddingHorizontal: 12,
    },
    floatingButton: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F05944',
      borderRadius: 50
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
   
    titleLabelChat: {
        fontWeight: 'bold',
        fontSize: 18
    },
    userIcon: {
        width: 60,
        height: 60,
    },
    
  })
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 64,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    userImage: {
        width: 200,
        height: 200,
        borderRadius: 25
    },
    textUserName: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 16,
        textAlign: 'center'
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
})
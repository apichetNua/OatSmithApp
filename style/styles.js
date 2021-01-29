import {StyleSheet} from 'react-native'
import theme from  '../theme/default'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inner: {
      padding: 24,
      flex: 1,
    },
    text: {
      fontSize: 36,
      marginBottom: 200,
      textAlign:'center',
      color: theme.dodgerBlueA700,
    },
    textInput: {
      height: 40,
      color: theme.dodgerBlueA700,
      borderColor: theme.dodgerBlueA700,
      borderBottomWidth: 1,
      justifyContent:'center',
      alignItems:'center',
      marginBottom: 36
    },
    btnLogin: {
      backgroundColor: "white",
      marginTop: 12
    }
  });

  export  default styles;
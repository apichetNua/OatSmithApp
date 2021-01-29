import React from 'react'
import {Button,StyleSheet,View,Alert} from 'react-native'
import theme from  '../theme/default'

const styles = StyleSheet.create({
    btnLogin: {
      color: theme.teal,
      backgroundColor: theme.dodgerBlueA700,
    },
 })

export default function Login() {
    return (
        <View>
            <Button
                style={styles.btnLogin}
                title="login"
                onPress={() => Alert.alert('Simple Button pressed')}
            />       
        </View>
    )
}

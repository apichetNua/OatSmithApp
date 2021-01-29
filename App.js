import React from 'react'
import {Text,SafeAreaView,TextInput,KeyboardAvoidingView} from 'react-native'
import styles from './style/styles'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inner}
      >
      <Text style={styles.text}>
         SmithApp
      </Text>
      <TextInput placeholder=" Username" style={styles.textInput} />
      <TextInput placeholder=" Password" style={styles.textInput} />
      <Login/>
      <Register/>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  )
}


export default App;

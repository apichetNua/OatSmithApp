import React,{useState} from 'react'
import {StyleSheet,View,Alert,Modal,Text,TouchableHighlight,SafeAreaView} from 'react-native'
import theme from  '../theme/default'

const styles = StyleSheet.create({
    btnRegister: {
      color: theme.dodgerBlueA700,
    },
    textStyle: {
        color: theme.wildStrawberry,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
        height:'100%',
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      }
 })

export default function Register() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <SafeAreaView style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                    </View>
                    </SafeAreaView>
            </Modal>
            <TouchableHighlight
                style={styles.btnRegister}
                onPress={() => {
                setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Register</Text>
            </TouchableHighlight>      
        </SafeAreaView>
    )
}

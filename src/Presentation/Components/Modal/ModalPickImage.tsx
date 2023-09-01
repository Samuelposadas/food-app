import React,{useState} from 'react'
import { Alert, Modal, Pressable, Text, View,StyleSheet } from 'react-native';
import Button from '../Button/Button';

interface Props {
    openGallery : ()=>void;
    openCamera : ()=>void;
    setModalState : React.Dispatch<React.SetStateAction<boolean>>
    modalState : boolean;
}

const ModalPickImage = ({openCamera,openGallery,modalState,setModalState,}:Props) => {

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalState}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalState(!modalState);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>Select an option</Text>
                <View style={styles.buttonContainer}>
             <Button text='Gallery' onPress={()=>{
                openGallery()
                setModalState(!modalState)
             }} />
             </View>
             <View style={styles.buttonContainer}>
             <Button text='Camera' onPress={()=>{
                openCamera()
                setModalState(!modalState)
             }} />
             </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalState(true)}>
          <Text style={styles.textStyle}></Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
    width:250,
    paddingLeft: 1,
    height:200,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    buttonContainer : {
     width : "100%",
     marginTop : 8
    },
  });


export default ModalPickImage
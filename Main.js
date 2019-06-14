import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet, Image, TouchableHighlight} from "react-native"; 
import Header from "./Header";
class Main extends Component {
    static navigationOptions = {
        header: null
    }
    render() {     
        return (    
            <View style={styles.vHeader}>
                <Header header={"Aplikasi Mobile FingkyAgustin 1715051068"} />
                <View style={styles.box}>
                <Image 
            			style={styles.gambar} 
            			source={require("./berkas.png")} 
            			resizeMode = "stretch" 
        			/> 
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('AddPeminjaman') }>
                        <Text style={styles.txtBox2}>Kelola Peminjaman Alat</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('AddPengembalian') }>
                        <Text style={styles.txtBox2}>Kelola Pengembalian Alat</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box2}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('ViewListPeminjaman') }>
                        <Text style={styles.txtBox2}>View Peminjaman</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );   
    } 
}   

   const styles = StyleSheet.create({
    vHeader: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 0.7,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.2,
        margin:20,
        flexDirection: 'row',
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        
    },
    box2: {
        flex: 0.2,
        margin:20,
        flexDirection: 'row',
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        marginBottom: 150,
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18
    },
    gambar:{
        height: 150,
        width: 150,
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: '#191970',
        borderWidth: 1,
        borderColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center', 
      },
    textBox2:{
        color: '#191970',
        fontSize: 15,    
      },
    BoxStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#191970',
      borderRadius: 5,
      padding:20,
      margin:10,
      width: '80%',
      height: 50, 
    }
});

export default Main;
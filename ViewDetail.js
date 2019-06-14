import React from 'react';
import { Text ,View,FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class ViewDetail extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: [],kode_peminjaman:this.props.navigation.state.params.kode_peminjaman,
        };
    }
    componentDidMount(){
    axios.get('http://fingkyagustin.000webhostapp.com/apiuas/viewPeminjaman.php?kode_peminjaman'+ this.state.kode_peminjaman)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
    render() {
        return (
            <View style={styles.vHeader}>
                <Header header={"FingkyAgustin 1715051068"} />
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View style={styles.boxitem}>
                            <Text>Kode Peminjaman={item.kode_peminjaman}</Text>
                            <Text>Nama Alat ={item.nm_alat}</Text>
                            <Text>Waktu Pinjam={item.waktu_pinjam}</Text>
                            <Text>Nama Peminjam={item.nama_peminjam}</Text>
                            <Text>Waktu Pengembalian={item.waktu_pengembali}</Text>
                            <Text>Nama Pengembali={item.nm_pengembali}</Text>
                        </View>
                    )
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            backgroundColor: '#ADD8E6',
        },
        boxitem1: {
            flex:0.8,
            width: 160,
            height: 50,
            backgroundColor: '#191970',
            borderWidth: 1,
            borderColor: '#191970',
            alignItems: 'center',
            justifyContent: 'center', 
        },
    });
    

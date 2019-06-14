import React from 'react';
import { Text ,View,FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class ViewListPeminjaman extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get('http://fingkyagustin.000webhostapp.com/apiuas/viewAwal.php')
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
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                            <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("ViewDetail",{kode_peminjaman:item.kode_peminjaman})}
                            title={item.nm_peminjam}
                            titleStyle={{color:'#191970', fontWeight:'bold'}}
                        />   
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
        list: {
            marginTop:10
        },
    });
    

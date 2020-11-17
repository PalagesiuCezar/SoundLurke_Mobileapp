import * as React from 'react';
import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Text, View } from '../../components/Themed';

export default class Home extends React.Component {
    constructor(props){
        super(props);        
    }
  render(){

    const { credential } = this.props.route.params;
    console.log(credential);

    return(
        <View style={styles.container}>
            {/* <Text>{btoa}</Text> */}
            <Button title="change-password" onPress={() => this.props.navigation.navigate('Auth',{})}/>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignSelf: 'center',
        top: 300,
    },
})
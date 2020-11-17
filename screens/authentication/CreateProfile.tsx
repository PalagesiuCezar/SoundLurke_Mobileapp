import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';

class CreateProfile extends React.Component {
    constructor(props){
      super(props);
    }
    renderRequest(){
        const title = 'Create Profile'

        return(
            // <Button title = {title} onPress={() => this.props.navigation.navigate('Menu',{})} />
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Menu',{})}
            >
            <Text>Login</Text>
          </TouchableOpacity>
        );
    }



  render(){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>CreateProfile</Text>
            </View>
            <View style={styles.container}>
                {this.renderRequest()}
            </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    inputText: {
      backgroundColor: '#E5E5E5',
      borderRadius: 30,
      padding: 10,
      marginTop: 7,
      flex:1,
    },
    donthave: {
      // fontFamily: 'Montserrat',
      fontWeight: "bold",
      color: '#0BA4AB',
      lineHeight: 23,
      fontSize: 15,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });

export default CreateProfile;


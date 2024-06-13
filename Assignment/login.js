import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library like MaterialIcons, Ionicons, etc.


export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={{color:"blue",fontWeight:"bold",fontSize:15}}>Jobizz</Text>

            <View style={{flexDirection: 'row', marginBottom:10}}>
            <Text style={{fontWeight:"bold",fontSize:20,marginRight:10}}>Welcome Back</Text>
            <Icon name="hand-o-right" size={30} color="#000" />
            </View>

            <Text style={{opacity:0.3,marginBottom:60}}>Let's log in. Apply to jobs! </Text>

            <TextInput style={[styles.input]}  placeholder='Name'/>
            <TextInput style={[styles.input]}  placeholder='Email'/>
            
            <Button title="Log in" />
            <Text style={{marginTop:70,marginBottom:80 , opacity:0.3}} >
                _________ Or continue with_________
            </Text>
 
            <View style={[styles.icon ,{marginLeft:90}]}>
            <Icon style={styles.icon} name="apple" size={30} color="black" />
            <Icon style={styles.icon} name="google" size={30} color="#DB4437" />
            <Icon style={styles.icon} name="facebook" size={30} color="blue" />
            </View>

            <View style={{flexDirection: 'row',marginLeft:20}}>
            <Text style={{opacity:0.3, marginRight:10}}>Haven't an account?</Text>
            <TouchableHighlight >
                <Text style={{color:"blue"}} >Register</Text>
            </TouchableHighlight>
                </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:40,
      paddingTop:60
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:10,
        opacity:0.6
      },
    icon:{
        flexDirection: 'row',
        marginBottom:40,
        marginRight:60,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center'
    }
  });
  
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from './Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(<>
        <Spacer><Text h3 style={style.header}>{headerText}</Text></Spacer>
        <Input 
        label="Email" value={email} onChangeText={setEmail}
        autoCapitalize="none" autoCorrect={false}
        />
        <Spacer/>

        <Input 
        label="Password" value={password} onChangeText={setPassword}
        autoCapitalize="none" autoCorrect={false} secureTextEntry={true}
        />

        {errorMessage? <Text style={style.errorMessage}>{errorMessage}</Text> : null}

        <Button type="outline" title={submitButtonText} onPress={() => onSubmit({email, password})}/> 
        
    </>)
}

const style = StyleSheet.create({
    errorMessage:{
        fontSize: 15,
        color: 'red',
        marginVertical: 15
    }, header: {
        textAlign: "center",
        color: "#4285f4"
    }
})

export default AuthForm;
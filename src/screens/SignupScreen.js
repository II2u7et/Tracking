import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return(
        <View style={style.container}>
             <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Tracker Sign Up"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}

            />
            
            <NavLink 
                text="Already have an account? Sign in."
                routeName="Signin"
            />
        </View>
    )
}


SignUpScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15
    },
    link:{
        color: '#4285f4',
        margin: 15
    }
})

export default SignUpScreen;
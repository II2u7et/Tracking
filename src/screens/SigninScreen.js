import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = ({navigation}) => {

    const {state, signin, clearErrorMessage} = useContext(Context);
    return(
        <View style={style.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Tracker Sign In"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}

            />
            
            <NavLink 
                text="Don't have an account? Sign up."
                routeName="Signup"
            />
        </View>
    )
}

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;
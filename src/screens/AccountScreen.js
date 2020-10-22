import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {

    const {signout} = useContext(AuthContext);
    return(
    <SafeAreaView forceInset={{top:'always'}} style={style.parent}>
        <Text h3>Account</Text>
        <Spacer/>
        <View  style={style.container}>
            <Button type='outline' 
            title='Log Out'
            onPress={signout}
            />
        </View>
       
    </SafeAreaView>
    )
}


const style = StyleSheet.create({
    parent: {
        marginHorizontal: 15
    },
    container:{
        justifyContent: 'center'
    }
})

export default AccountScreen;
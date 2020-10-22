import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from '../components/Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
    return(
        <TouchableOpacity onPress={ () => navigation.navigate(routeName)}>
            <Spacer><Text style={style.link}>
                {text}
            </Text></Spacer>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    link:{
        color: '#4285f4',
        marginVertical: 15
    }
})

export default withNavigation(NavLink);
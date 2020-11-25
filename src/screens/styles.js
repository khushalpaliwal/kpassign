import React from 'react';
import { StyleSheet } from 'react-native';
import {Text} from '@ui-kitten/components';

const styles = StyleSheet.create({
    mainBox: { flex: 1, paddingVertical: 16, backgroundColor: '#F8F8F8' },
    inputBox: {
        marginVertical: 8,
        backgroundColor: '#ffffff'
    },
    appLogo: {
        width: 199,
        height: 43,
        alignSelf: 'center',
        marginTop: 16
    },
    appIcon: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginVertical: 16
    },
    mainButton: {marginTop: 32, width: 180, marginBottom: 32, alignSelf: 'center'},
    mainButtonText: {fontSize: 19,color: '#ffffff'},
    cardBox: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 0,
        marginVertical: 8,

    },
    divider: {
        marginVertical: 32
    },
    dividerTwo: {
        marginVertical: 16
    },
    chooseButton: {
        backgroundColor: '#ffffff'
    },
    row50: {flexDirection: 'row', marginVertical: 8},
    col50One: {flex: 0.5, paddingRight: 4},
    col50Two: {flex: 0.5, paddingLeft:4},
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      dismissButton: {
          marginTop: 16
      }
  });

const LabelText = (props) => (
    <Text>{props.textv} {props.isRequired && <Text style={{color: 'red'}}>*</Text>}</Text>
);

export {styles, LabelText};
import React from 'react';
import { SafeAreaView,Dimensions } from 'react-native';
import { Button, Divider, Layout, Avatar, Input, Text, Card, Modal } from '@ui-kitten/components';
import { styles, LabelText } from './styles';

export const ScreenOne = ({ navigation }) => {

  const navigateDetails = () => {
    if(phone!==''){
        navigation.navigate('ScreenTwo', {mobileNumber: phone});
    } else{
        setVisible(true)
    }
  };

  const [phone, setPhone] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.mainBox}>
      <Layout style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16, backgroundColor: '#F8F8F8' }}>
        <Card style={styles.cardBox}>
            <Avatar shape='square' source={require('../../assets/app-logo.png')} style={styles.appLogo} /> 
            <Divider style={styles.divider}/>
            <Input
            value={phone}
            label={<LabelText textv="Mobile Number" isRequired={true} />}
            onChangeText={phone => setPhone(phone)}
            style={styles.inputBox}
            textAlign={'center'}
            maxLength={10}
            keyboardType='numeric'
            />
            <Button style={styles.mainButton} onPress={navigateDetails}>{<Text style={styles.mainButtonText} >Continue</Text>}</Button>
        </Card>
      </Layout>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Please enter mobile number.</Text>
          <Button size='small' onPress={() => setVisible(false)} style={styles.dismissButton}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};


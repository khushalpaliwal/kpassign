import React from 'react';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { Button, Layout, Avatar, Input, Text, Card, Modal} from '@ui-kitten/components';
import { styles, LabelText } from './styles';

export const ScreenTwo = ({ route, navigation }) => {

  const navigateDetails = () => {
    if(fullname!=='' && upiid!==''){
    navigation.navigate('ScreenThree', {
        mobileNumber: route.params.mobileNumber,
        fullName: fullname,
        upiId: upiid,
        profession: selectedIndex===0 ? 'Student' : 'Professional'
    });
    } else{
        setVisible(true)
    }
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [fullname, setFullName] = React.useState('');
  const [upiid, setUpiId] = React.useState('');
  const [visible, setVisible] = React.useState(false);


  return (
    <SafeAreaView style={styles.mainBox}>
        <ScrollView
        showsVerticalScrollIndicator={false}
    >
    <Layout style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16, backgroundColor: '#F8F8F8' }}>
    <Text>setup your GoDutch account</Text>
        <Card style={styles.cardBox}>
            <Avatar source={require('../../assets/app-icon.png')} style={styles.appIcon} /> 
            <Text>current profession</Text>
            <Layout style={styles.row50}>
                <Layout style={styles.col50One}>
                <Button appearance='outline' status={selectedIndex===0 ? 'primary' : 'basic'} onPress={() => setSelectedIndex(0)} style={styles.chooseButton}>
                    Student
                </Button>
                </Layout>
                <Layout style={styles.col50Two}>
                <Button appearance='outline' status={selectedIndex===1 ? 'primary' : 'basic'} onPress={() => setSelectedIndex(1)} style={styles.chooseButton}>
                    Professional
                </Button>
                </Layout>
            </Layout>
            <Input
            value={fullname}
            label={<LabelText textv="full name" isRequired={true} />}
            onChangeText={fullname => setFullName(fullname)}
            style={styles.inputBox}
            textAlign={'center'}
            />
            <Input
            value={upiid}
            label={<LabelText textv="UPI ID" isRequired={true} />}
            onChangeText={upiid => setUpiId(upiid)}
            style={styles.inputBox}
            textAlign={'center'}
            />
            <Button style={styles.mainButton} onPress={navigateDetails}>{<Text style={styles.mainButtonText} >Continue</Text>}</Button>
        </Card>
      </Layout>
      </ScrollView>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Please enter all the details.</Text>
          <Button size='small' onPress={() => setVisible(false)} style={styles.dismissButton}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

import React from 'react';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { Button, Layout, Divider, Text, Card} from '@ui-kitten/components';
import { styles } from './styles';

export const ScreenThree = ({ route, navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('ScreenOne');
  };


  return (
    <SafeAreaView style={styles.mainBox}>
    <ScrollView
        showsVerticalScrollIndicator={false}
    >
      <Layout style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16, backgroundColor: '#F8F8F8' }}>
        <Text>Your Details</Text>
        <Card style={styles.cardBox}>
            <Text>Name</Text>
            <Divider style={styles.dividerTwo} />
            <Text status='primary'>{route.params.fullName}</Text>
            <Divider style={styles.dividerTwo} />
            <Text>Mobile Number</Text>
            <Divider style={styles.dividerTwo} />
            <Text status='primary'>{route.params.mobileNumber}</Text>
            <Divider style={styles.dividerTwo} />
            <Text>UPI ID</Text>
            <Divider style={styles.dividerTwo} />
            <Text status='primary'>{route.params.upiId}</Text>
            <Divider style={styles.dividerTwo} />
            <Text>Profession</Text>
            <Divider style={styles.dividerTwo} />
            <Text status='primary'>{route.params.profession}</Text>
            <Divider style={styles.dividerTwo} />
        </Card>
        <Button style={styles.mainButton} onPress={navigateDetails}>{<Text style={styles.mainButtonText} >Continue</Text>}</Button>
      </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

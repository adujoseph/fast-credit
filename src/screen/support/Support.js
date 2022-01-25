import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SupportItem from './components/SupportItem';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Support = () => {
  return (
    <>
      <View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Frequenty Asked Questions</Text>
          <SupportItem text="See FAQ" iconname="chatbox-ellipses" />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Find us on socials</Text>
          <SupportItem text="fastcreditng" iconname="md-logo-instagram" />
          <SupportItem text="fastcreditng" iconname="md-logo-facebook" />
          <SupportItem text="fastcreditng" iconname="md-logo-twitter" />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Call our hotline</Text>
          <SupportItem text="Call now" iconname="md-call" />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Reach us via mail</Text>
          <SupportItem text="Mail us" iconname="md-mail" />
        </View>
      </View>
    </>
  );
};

export default Support;

const styles = StyleSheet.create({
  box: {
    paddingVertical: hp(2),
  },
  boxText: {
    paddingVertical: hp(1),
    fontWeight: 'bold',
  },
});

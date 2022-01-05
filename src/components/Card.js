import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';

const Dashboard = ({children, bgColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      {children}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: hp(2),
    borderRadius: hp(1.5),
    marginVertical: hp(1),
  },
});

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';

const CustomButton = ({title, bgColor, txtColor, onPress, borderColor}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: bgColor,
            borderColor: borderColor,
          },
        ]}
        onPress={onPress}>
        <Text style={[styles.btnText, {color: txtColor}]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    marginTop: hp(2),
    padding: hp(1),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1),
    width: '100%',
    // borderWidth: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // alignSelf: 'center',
  },
  btnText: {
    fontSize: rf(2.1),
  },
});

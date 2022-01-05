import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({title, handlePress, color, textOnly}) => {
  return (
    <>
      <View style={styles.wrapper}>
        {textOnly ? (
          <Text style={styles.section}>{title}</Text>
        ) : (
          <>
            <View style={styles.rowInset}>
              <Image
                source={require('../../assets/images/lady1.png')}
                style={{
                  height: hp(5),
                  width: hp(5),
                  resizeMode: 'cover',
                  borderRadius: hp(10),
                  padding: hp(1),
                }}
              />
              <Text style={[styles.text, {color: color}]}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Ionicons name="notifications" size={25} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: hp(1),
    paddingVertical: hp(2),
  },
  text: {
    fontSize: rf(2.5),
    fontWeight: 'bold',
    fontFamily: 'Rubik Regular',
    paddingLeft: hp(2),
  },
  btn: {
    padding: hp(1.5),
    borderRadius: 100,
  },
  rowInset: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    fontWeight: 'bold',
    fontSize: rf(3),
    color: '#333',
  },
});

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SupportItem = ({text, iconname, onPress}) => {
  return (
    <>
      <View>
        <TouchableOpacity style={styles.itemWrapper} onPress={onPress}>
          <Ionicons name={iconname} />
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SupportItem;

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: hp(1),
    width: '100%',
    marginVertical: hp(0.5),
    alignItems: 'center',
  },
  text: {
    marginLeft: hp(0.5),
  },
});

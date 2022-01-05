import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constant/theme';

const SearchBar = props => {
  const {placeholder, value, onChangeText} = props;
  return (
    <>
      <View style={styles.wrapper}>
        <Ionicons name="search" size={20} color={Colors.gray} />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderRadius: hp(5),
    // marginHorizontal: hp(1),
    marginVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    paddingLeft: hp(2),
  },
});

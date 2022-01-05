import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeCard = ({item}) => {
  const {title, value, bgColor, textColor, image, actionText} = item;

  return (
    <SafeAreaView style={{padding: hp(1)}}>
      <TouchableOpacity style={[styles.cardView, {backgroundColor: bgColor}]}>
        <View style={styles.row}>
          <View style={{flex: 0.8}}>
            <Text style={[{color: textColor, fontWeight: 'bold'}]}>
              {title}
            </Text>
            <Text style={[{color: textColor}]}>{value}</Text>
          </View>
          <View style={{flex: 0.2}}>
            {image ? (
              <Image source={image} style={styles.image} />
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: '#231c4f',
                  padding: hp(1),
                  borderRadius: hp(1),
                }}>
                <Text style={{color: 'white'}}>{actionText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(2),
    borderRadius: hp(1.5),
    height: hp(14),
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
    justifyContent: 'space-between',
  },
  iconBox: {
    padding: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(5),
  },
  imageIcon: {
    height: hp(2),
    width: hp(2),
    resizeMode: 'contain',
  },
  txt: {
    color: '#000',
    fontSize: rf(2.1),
    fontWeight: '500',
    fontFamily: 'Rubik Regular',
  },
  image: {
    height: hp(8),
    width: hp(8),
    resizeMode: 'contain',
  },
});

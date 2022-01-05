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
import {Colors} from '../../../constant/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RenderCard = ({item}) => {
  const {
    icon,
    currency,
    symbol,
    chart,
    currentPrice,
    trend,
    percentageChange,
    iconBg,
  } = item;

  const selectColor = stat => {
    let color;
    if (stat === 'up') {
      color = '#00B42D';
    } else if (stat === 'down') {
      color = '#E50F01';
    } else if (stat === 'unchanged') {
      color = '#F2C85D';
    }
    return color;
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.cardView}>
        <View style={styles.row}>
          <View style={[styles.iconBox, {backgroundColor: iconBg}]}>
            <Image source={icon} style={styles.imageIcon} />
          </View>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: rf(2.1),
                fontWeight: '500',
                fontFamily: 'Rubik Regular',
              }}>
              {currency}
            </Text>
            <Text style={styles.txt}>{symbol}</Text>
          </View>
          <View>
            <Image source={chart} style={styles.imageChart} />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={[styles.txt, {color: '#77838F'}]}>
              {'\u0024'}
              {currentPrice}
            </Text>
            <Text
              style={{color: selectColor(trend), fontFamily: 'Rubik Regular'}}>
              <Ionicons
                name={trend === 'up' ? 'chevron-up' : 'chevron-down'}
                size={15}
              />
              {percentageChange}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RenderCard;

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(1),
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
  imageChart: {
    // height: hp(5),
    // width: hp(5),
    resizeMode: 'contain',
  },
});

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

const HomeCard = ({item}) => {
  const {name, service, amount, date} = item;

  return (
    <SafeAreaView style={{flex: 1, padding: hp(1)}}>
      <TouchableOpacity style={[styles.cardView]}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Ionicons name="navigate-outline" size={20} />
          </View>
          <View style={styles.name}>
            <Text style={[styles.bold]}>{name}</Text>
            <Text style={[]}>{service}</Text>
          </View>
          <View style={styles.amount}>
            <Text style={[styles.bold, styles.secondary]}>
              {'\u20A6 '}
              {amount}
            </Text>
            <Text style={[]}>{date}</Text>
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
    backgroundColor: 'white',
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
    // height: hp(5),
    // width: hp(5),
    resizeMode: 'contain',
  },
  icon: {
    flex: 0.1,
    padding: hp(1),
    backgroundColor: '#cbeeea',
    borderRadius: hp(5),
  },
  name: {
    flex: 0.5,
    padding: hp(1),
  },
  amount: {
    flex: 0.4,
    padding: hp(1),
    alignItems: 'flex-end',
  },
  bold: {
    fontWeight: 'bold',
  },
  secondary: {
    color: Colors.secondary,
  },
});

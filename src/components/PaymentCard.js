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
import {Colors} from '../constant/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeCard = ({item}) => {
  const {name, amount, bank, initial} = item;

  return (
    <SafeAreaView style={{padding: hp(0.2)}}>
      <View style={styles.card}>
        <View style={styles.rowRight}>
          <View style={styles.initial}>
            <Text>{initial}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.name}> {name}</Text>
            <Text>
              <Text style={[styles.amount, styles.secondary, styles.bold]}>
                {amount}
              </Text>
              <Text style={styles.bank}>{bank}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.rowLeft}>
          <View style={[styles.icon, {backgroundColor: '#fef3f0'}]}>
            <FontAwesome5 name="times" size={20} solid color={Colors.primary} />
          </View>
          <View style={[styles.icon, {backgroundColor: '#edf8ed'}]}>
            <Ionicons name="refresh" size={20} color={Colors.secondary} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(1),
    backgroundColor: '#fff',
    padding: hp(2),
    borderRadius: hp(1),
  },
  initial: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f5',
    padding: hp(2),
    borderRadius: hp(10),
  },
  rowRight: {
    flexDirection: 'row',
    flex: 0.65,
  },
  rowLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.35,
  },
  text: {
    width: '100%',
  },
  icon: {
    height: hp(6),
    width: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    padding: hp(1),
    borderRadius: hp(5),
    margin: hp(1),
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
  primary: {
    color: Colors.primary,
  },
  secondary: {
    color: Colors.secondary,
  },
  amount: {
    fontSize: rf(2.3),
    fontWeight: 'bold',
  },
  bank: {
    fontSize: rf(1.5),
    color: 'gray',
    margin: hp(5),
  },
  name: {
    fontSize: rf(2.6),
    fontWeight: 'bold',
    color: '#333',
  },
});

import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from '../../../constant/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RenderCard = ({item}) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const {
    address,
    crypto_amount,
    crypto_unit,
    naira_amount,
    timestampe,
    status,
    rate,
    usd_value,
    confirmations,
  } = item;

  const selectColor = stat => {
    let color;
    if (stat === 'Paid') {
      color = '#00B42D';
    } else if (stat === 'Unpaid') {
      color = '#E50F01';
    } else if (stat === 'Pending') {
      color = '#F2C85D';
    }
    return color;
  };

  return (
    <>
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => setShowDetails(!showDetails)}>
        <View style={styles.row}>
          <View
            style={{
              padding: hp(0.5),
              borderColor: selectColor(status),
              borderWidth: 2,
              borderRadius: hp(5),
              alignSelf: 'center',
            }}>
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={15}
              color={selectColor(status)}
            />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.primaryText}>{address}</Text>
            <Text
              style={[
                styles.textStyle,
                styles.textBold,
                {
                  paddingVertical: hp(1),
                  fontFamily: 'Rubik Regular',
                  fontWeight: '900',
                },
              ]}>
              {crypto_amount}
              <Text style={{fontWeight: 'normal', fontFamily: 'Rubik Regular'}}>
                {`${crypto_unit}   |`}
              </Text>
              <Text
                style={{
                  color: selectColor(status),
                }}>
                {'   \u20A6'}
                {naira_amount}
                <Text
                  style={{
                    fontWeight: 'normal',
                  }}>
                  :00
                </Text>
              </Text>
            </Text>
            <Text style={styles.primaryText}>{timestampe}</Text>
          </View>
        </View>
        {showDetails ? (
          <View style={{paddingTop: hp(2)}}>
            <View style={styles.rowEffect}>
              <Text style={styles.secondaryText}>Transaction Link</Text>
              <View
                style={{
                  padding: hp(0.4),
                  borderColor: '#000',
                  borderWidth: 1,
                  borderRadius: hp(5),
                  alignSelf: 'center',
                }}>
                <MaterialCommunityIcons name="arrow-left-right" size={10} />
              </View>
            </View>
            <View style={styles.rowEffect}>
              <Text style={styles.secondaryText}>Confirmations</Text>
              <Text style={styles.textBold}>{confirmations}</Text>
            </View>
            <View style={styles.rowEffect}>
              <Text style={styles.secondaryText}>USD Value</Text>
              <Text style={styles.textBold}>{usd_value}</Text>
            </View>
            <View style={styles.rowEffect}>
              <Text style={styles.secondaryText}>Rate</Text>
              <Text style={[styles.textBold, {fontFamily: 'Rubik Bold'}]}>
                {rate}
              </Text>
            </View>
            <View style={styles.rowEffect}>
              <Text style={styles.secondaryText}>Status</Text>
              <Text style={[styles.textBold, {color: selectColor(status)}]}>
                {status}
              </Text>
            </View>
          </View>
        ) : null}
      </TouchableOpacity>
    </>
  );
};

export default RenderCard;

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(1.5),
    backgroundColor: 'white',
    marginVertical: hp(0.5),
    borderRadius: hp(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowEffect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    paddingVertical: hp(1),
  },
  textBold: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Rubik Regular',
  },
  textStyle: {
    fontSize: rf(3),
    fontFamily: 'Rubik Regular',
  },
  primaryText: {
    fontSize: rf(1.7),
    color: Colors.primary,
    fontFamily: 'Rubik Regular',
  },
  secondaryText: {
    fontSize: rf(1.7),
    color: Colors.primary,
    fontWeight: '400',
    fontFamily: 'Rubik Regular',
  },
});

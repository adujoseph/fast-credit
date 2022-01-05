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
  const {title, bgColor, icon} = item;

  return (
    <SafeAreaView>
      <View style={[{backgroundColor: bgColor}]}>
        <View>
          <Ionicons name={icon} size={35} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  cardView: {
    width: '100%',
  },
  textWrapper: {
    padding: 20,
    width: '100%',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});

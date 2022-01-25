import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import {Colors} from '../../constant/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const Wallet = ({navigation, currentUser}) => {
  // const {name} = currentUser;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header title={'Welcome,'} color={Colors.primary} />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: hp(2),
          }}>
          <Text
            style={{fontWeight: '500', fontSize: rf(2.5), color: '#f4f6f5'}}>
            Balance
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: rf(6), color: '#f4f6f5'}}>
            {'\u20A6 '}264,000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
            paddingVertical: hp(3),
          }}>
          <TouchableOpacity style={styles.wrap}>
            <View style={styles.wrapIcon}>
              <Ionicons name="wallet" size={20} color="green" />
            </View>
            <Text style={styles.wrapText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrap}>
            <View style={styles.wrapIcon}>
              <Ionicons name="wallet" size={20} />
            </View>

            <Text style={styles.wrapText}>Topup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrap}>
            <View style={styles.wrapIcon}>
              <Ionicons name="wallet" size={20} />
            </View>

            <Text style={styles.wrapText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrap}>
            <View style={styles.wrapIcon}>
              <Ionicons name="wallet" size={20} />
            </View>
            <Text style={styles.wrapText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: hp(2),
            marginTop: hp(3),
          }}>
          <Text>Lastes Transactions</Text>
          <TouchableOpacity>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return {
    currentUser: state.user.activeUser,
  };
};
export default connect(mapStateToProps, null)(Wallet);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    marginTop: hp(1),
    marginHorizontal: hp(1.5),
    paddingTop: hp(1),
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapText: {
    color: '#f4f6f5',
  },
  wrapIcon: {
    padding: hp(1.5),
    backgroundColor: 'lightgreen',
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingVertical: hp(1),
  },
  scrollContainer: {
    flexGrow: 1,
    // width: '100%',
  },
  insetCard: {
    padding: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: hp(1),
    width: '48%',
  },
  insetText: {
    fontSize: rf(2.4),
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    flex: 1,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // zIndex: 999,
    // minHeight: hp(40),
  },
});

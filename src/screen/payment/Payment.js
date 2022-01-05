import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from '../../components/Header';
import {Colors} from '../../constant/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {PayServiceData, RecentServiceData} from './components/data';
import PaymentCard from '../../components/PaymentCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

const PaymentScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Header title={`Payment`} color={Colors.primary} textOnly={true} />
          <ScrollView
            horizontal={true}
            pagingEnabled={false}
            style={styles.scroll}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity
              style={[styles.card, {backgroundColor: '#cbeeea'}]}>
              <Ionicons name="cash" size={35} />
              <View styler={styles.cardInset}>
                <Text style={styles.cardText}>Send</Text>
                <Text style={styles.cardText}>Money</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, {backgroundColor: '#dbd4f2'}]}>
              <Ionicons name="ios-briefcase-outline" size={35} />
              <View styler={{width: '100%'}}>
                <Text style={styles.cardText}>Bill</Text>
                <Text style={styles.cardText}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, {backgroundColor: '#f8edca'}]}>
              <Ionicons name="phone-portrait" size={35} />
              <View styler={{width: '100%'}}>
                <Text style={styles.cardText}>Data &</Text>
                <Text style={styles.cardText}>Airtime</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Saved Payments</Text>
            <FlatList
              data={RecentServiceData}
              renderItem={({item}) => <PaymentCard Card item={item} />}
              keyExtractor={item => item.id.toString()}
              scrollEventThrottle={32}
              initialNumToRender={10}
              contentContainerStyle={{paddingBottom: hp(5)}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: hp(1),
    marginHorizontal: hp(2),
    width: '92%',
    alignSelf: 'center',
  },
  scroll: {
    //width: '95%',
    // flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    // width: '100%',
  },
  card: {
    paddingVertical: hp(4),
    paddingHorizontal: hp(2),
    height: hp(20),
    width: hp(18),
    borderRadius: hp(1),
    margin: hp(1),
    flex: 1,
  },
  cardInset: {width: '100%'},
  cardText: {
    fontSize: rf(2.4),
    fontWeight: 'bold',
  },
  section: {width: '100%'},
  sectionTitle: {
    fontWeight: 'bold',
  },
});

/***
 * 
 * 
<View style={styles.wrapper}>
  <FlatList
    data={PayServiceData}
    renderItem={({item}) => <PayOptions item={item} />}
          keyExtractor={item => item.id.toString()}
          scrollEventThrottle={32}
          initialNumToRender={10}
          contentContainerStyle={{paddingBottom: hp(1)}}
          horizontal={true}
  /> 
</View>
 */

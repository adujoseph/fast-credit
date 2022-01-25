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
import {HomeData, RecentActivityData} from './components/HomeData';
import HomeCard from './components/HomeCard';
import RecentActivityCard from './components/RecentActivityCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const Dashboard = ({navigation, currentUser}) => {
  // const {name} = currentUser;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header title={`Welcome,`} color={Colors.primary} />
        <View>
          <Text>Customer ID: XXXXX</Text>
        </View>
        <View>
          <FlatList
            data={HomeData}
            renderItem={({item}) => <HomeCard item={item} />}
            keyExtractor={item => item.id.toString()}
            scrollEventThrottle={32}
            initialNumToRender={10}
            contentContainerStyle={{paddingBottom: hp(1)}}
          />
        </View>
        <View>
          <FlatList
            data={RecentActivityData}
            renderItem={({item}) => <RecentActivityCard item={item} />}
            keyExtractor={item => item.id.toString()}
            scrollEventThrottle={32}
            initialNumToRender={10}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: hp(1)}}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp(1),
            }}>
            <TouchableOpacity style={styles.insetCard}>
              <Ionicons name="person" size={35} />
              <Text style={styles.insetText}>Public Sector Loan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.insetCard}>
              <Ionicons name="person" size={35} />
              <Text style={styles.insetText}>Public Sector Loan</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp(1),
            }}>
            <TouchableOpacity style={styles.insetCard}>
              <Ionicons name="person" size={35} />
              <Text style={styles.insetText}>Public Sector Loan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.insetCard}>
              <Ionicons name="person" size={35} />
              <Text style={styles.insetText}>Public Sector Loan</Text>
            </TouchableOpacity>
          </View>
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
export default connect(mapStateToProps, null)(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: hp(1),
    marginHorizontal: hp(1.5),
    paddingTop: hp(1),
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
});

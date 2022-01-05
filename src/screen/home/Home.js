import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import {Colors} from '../../constant/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {HomeData, RecentActivityData} from './components/HomeData';
import HomeCard from './components/HomeCard';
import RecentActivityCard from './components/RecentActivityCard';
import {connect} from 'react-redux';

const Dashboard = ({navigation, currentUser}) => {
  const {name} = currentUser;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header title={`Welcome, ${name}`} color={Colors.primary} />
        <FlatList
          data={HomeData}
          renderItem={({item}) => <HomeCard item={item} />}
          keyExtractor={item => item.id.toString()}
          scrollEventThrottle={32}
          initialNumToRender={10}
          contentContainerStyle={{paddingBottom: hp(1)}}
        />
        <Text style={[styles.bold]}>Recent Activity</Text>
        <FlatList
          data={RecentActivityData}
          renderItem={({item}) => <RecentActivityCard item={item} />}
          keyExtractor={item => item.id.toString()}
          scrollEventThrottle={32}
          initialNumToRender={10}
          contentContainerStyle={{paddingBottom: hp(5)}}
        />
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
});

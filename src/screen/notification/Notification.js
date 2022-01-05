import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Colors} from '../../constant/theme';
import TransactCard from './components/TransactCard';
import {Transact} from './components/transactionData';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import Header from '../../components/Header';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sell History" color={Colors.white} />

      <View style={styles.wrapper}>
        <Text
          style={{
            textAlign: 'right',
            color: 'white',
            fontSize: rf(2.2),
            paddingVertical: hp(0.5),
            fontWeight: '400',
            fontFamily: 'Rubik Regular',
          }}>
          Transaction Summary
        </Text>
        <FlatList
          data={Transact}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <TransactCard item={item} />}
          keyExtractor={item => item.id}
          scrollEventThrottle={32}
          initialNumToRender={10}
          contentContainerStyle={{paddingBottom: hp(4)}}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    marginHorizontal: hp(1.5),
    height: hp(80),
  },
});

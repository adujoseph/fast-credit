import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {login, loginscreen, dash} from '../../constant/contant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation, currentLang}) => {
  useEffect(() => {
    setTimeout(() => {
      handleRouteOptions();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const handleRouteOptions = async () => {
    const token = await AsyncStorage.getItem('token');
    const isFirstTime = JSON.parse(await AsyncStorage.getItem('firstLaunch'));

    if (!isFirstTime) {
      navigation.replace(login);
    } else {
      if (token) {
        //get user details
        //navigate to dashboard
        navigation.replace(dash);
      } else {
        navigation.replace(loginscreen);
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Animatable.View
          animation="slideInDown"
          iterationCount={4}
          direction="alternate">
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.imageStyle}
          />
        </Animatable.View>
      </View>
    </>
  );
};
const mapStateToProps = state => {
  return {
    currentLang: state.user.setLanguage,
  };
};
export default connect(mapStateToProps, null)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: hp(25),
    alignSelf: 'center',
    bottom: hp(3),
    resizeMode: 'contain',
  },
});

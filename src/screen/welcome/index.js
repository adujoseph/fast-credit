import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {Colors} from '../../constant/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {Dash, loginscreen, phone, register1} from '../../constant/contant';
import CustomButton from '../../components/Button';
import Video from 'react-native-video';

const LoginScreen = ({navigation, currentLang}) => {
  return (
    <>
      <View style={styles.container}>
        <Video
          source={require('../../../assets/videos/bgvideo.mp4')}
          style={StyleSheet.absoluteFill}
          muted={true}
          repeat={false}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        {/* <View style={styles.topHalf}>
          <Image
            source={require('../../../assets/images/bg1.png')}
            style={{width: '100%', resizeMode: 'contain'}}
          />

        </View> */}
        <View style={{flex: 0.7}}></View>
        <View style={styles.bottomHalf}>
          <View style={styles.btns}>
            {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.title}>Welcome to FastCredit</Text>
              <Text style={styles.subtitle}>
                Need to Fuel your dreams? Get up to 3 million in less than 24
                hours
              </Text>
            </View> */}

            <CustomButton
              title="Login Now"
              bgColor={Colors.primary}
              txtColor={Colors.white}
              borderColor={Colors.primary}
              onPress={() => navigation.navigate(loginscreen)}
            />

            <CustomButton
              title="Create Account"
              bgColor={Colors.white}
              txtColor={Colors.primary}
              borderColor={Colors.primary}
              onPress={() => navigation.navigate(phone)}
            />
          </View>
        </View>
      </View>
    </>
  );
};
const mapStateToProps = state => {
  return {
    currentLang: state.user.setLanguage,
  };
};
export default connect(mapStateToProps, null)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 0.4,
    marginTop: hp(10),
    paddingTop: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  bottomHalf: {
    flex: 0.3,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  btns: {
    padding: hp(2),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: rf(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.dark,
  },
  subtitle: {
    fontSize: rf(2.4),
    textAlign: 'center',
    color: Colors.gray,
    paddingVertical: hp(1),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

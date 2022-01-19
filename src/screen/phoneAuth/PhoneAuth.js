import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import {Colors} from '../../constant/theme';
import {register1, login, loginscreen} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const AuthScreen = ({navigation}) => {
  const [confirm, setConfirm] = useState({});
  const [email, setEmail] = useState('');
  const [code, setCode] = useState();
  const onFocusHandler = () => {};
  const handleValidation = () => {};
  const submitHandler = () => {
    setConfirm({email});
  };
  const confirmHandler = () => {
    navigation.navigate(register1);
  };
  if (Object.keys(confirm).length) {
    return (
      <View style={styles.container}>
        <Text>Please enter the 6-digit code sent to you at </Text>
        <OTPInputView
          style={{width: '100%', height: hp(10)}}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={val => setCode(val)}
          // autoFocusOnLoad
          codeInputFieldStyle={{margin: hp(0.6), color: 'black'}}
          codeInputHighlightStyle={{borderWidth: 1, color: 'black'}}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <TouchableOpacity onPress={() => null}>
          <Text
            style={{
              color: Colors.primary,
              paddingVertical: hp(1),
              fontWeight: 'bold',
            }}>
            Didn't Receive? Resend code
          </Text>
        </TouchableOpacity>
        <CustomButton
          title="Confirm"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={confirmHandler}
        />
        <TouchableOpacity onPress={() => null}>
          <Text style={{textAlign: 'center', color: Colors.primary}}>
            Change Number
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <Text>Enter Phone Number</Text>
        <TextField
          label="Create Password"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Phone Number"
          keyboardType="number-pad"
          //   validated={isEmail}
          onFocus={() => onFocusHandler('email')}
          onBlur={() => handleValidation('email')}
          iconName="phone-portrait"
        />
        <CustomButton
          title="Continue"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={submitHandler}
        />
        <TouchableOpacity onPress={() => navigation.navigate(loginscreen)}>
          <Text>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
});

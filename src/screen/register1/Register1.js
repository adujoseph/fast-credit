import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import {Colors} from '../../constant/theme';
import {dash, register2} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';

const sexOption = ['Male', 'Female'];
const RegisterScreen1 = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [rem, setRem] = useState(false);

  const handleValidation = type => {
    if (type === 'password') {
      if (password.length > 3) {
        setIsPassword(true);
      } else {
        setErrorMessage('password must be at least 3 characters');
      }
    } else if (type === 'email') {
      if (email) {
        setIsEmail(true);
      } else {
        setErrorMessage('email field cannot be empty');
      }
    }
  };

  const onFocusHandler = arg => {
    setErrorMessage('');
    if (arg === 'email') {
      setEmail('');
    }
    if (arg === 'password') {
      setPassword('');
    }
  };

  const submitHandler = () => {
    navigation.navigate(register2);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>Create an account to get started</Text>
        </View>
        <TextField
          label="Name in full"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Name in full"
          validated={isEmail}
          onFocus={() => onFocusHandler('email')}
          onBlur={() => handleValidation('email')}
          iconName="person"
        />
        <TextField
          label="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter email address"
          validated={isEmail}
          onFocus={() => onFocusHandler('email')}
          onBlur={() => handleValidation('email')}
          iconName="mail"
        />
        <TextField
          label="Phone Number"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Transaction Pin"
          validated={isEmail}
          onFocus={() => onFocusHandler('email')}
          onBlur={() => handleValidation('email')}
          iconName="phone-portrait"
        />
        <TextField
          label="Create Password"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Create Password"
          validated={isEmail}
          onFocus={() => onFocusHandler('email')}
          onBlur={() => handleValidation('email')}
          iconName="lock-closed"
        />
        <View style={{flexDirection: 'row'}}>
          {sexOption.map((s, i) => (
            <TouchableOpacity key={i} style={styles.option}>
              <Text style={styles.optionText}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton
          title="Continue"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={submitHandler}
        />
      </SafeAreaView>
    </>
  );
};
export default RegisterScreen1;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(10),
    marginHorizontal: hp(1),
  },
  labelView: {
    paddingVertical: hp(1.5),
  },
  labelText: {
    fontSize: rf(2.3),
    fontWeight: 'bold',
  },
  option: {
    padding: hp(2),
    backgroundColor: '#f4f6f5',
    borderRadius: hp(1),
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '45%',
    marginLeft: hp(1),
  },
  optionText: {
    fontSize: rf(2.3),
  },
});

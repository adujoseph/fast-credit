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
import {dash, register2, terms} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {auth_request} from '../../services/authRequest';

const sexOption = ['Male', 'Female'];
const RegisterScreen1 = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [gender, setGender] = useState();
  const [loading, setLoading] = useState(false);

  let number = route.params.phonenumber;

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
    if (arg === 'name') {
      setFullname('');
    }
    if (arg === 'password') {
      setPassword('');
    }
    if (arg === 'email') {
      setEmail('');
    }
    if (arg === 'pin') {
      setPin('');
    }
  };

  const submitHandler = async () => {
    if (fullname === '') {
      setErrorMessage('Enter name in full, surname last.');
      return;
    }
    if (email === '') {
      setErrorMessage('Enter email');
      return;
    }
    if (password === '') {
      setErrorMessage('Enter password');
      return;
    }
    if (pin === '') {
      setErrorMessage('Enter pin');
      return;
    }
    if (gender === '') {
      setErrorMessage('Select gender');
      return;
    }
    if (!accepted) {
      setErrorMessage('Check terms and condition');
      return;
    }
    let names = fullname.split(' ');
    if (names.length < 2) {
      setErrorMessage('Enter first name and last name');
      return;
    }
    setLoading(true);
    try {
      const url = '/createuser';

      const payload = {
        firstname: names[0],
        lastname: names[names.length - 1],
        middlename: names.length > 2 ? names[1] : '',
        gender: gender,
        phone: number,
        email: email,
        password: password,
        pin: pin,
        verified: 'Y',
      };
      console.log(payload);
      const response = await auth_request(url, payload);
      if (response) {
        console.log(response);
        // navigation.navigate(register2, {number});
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    console.log('Submit Handler...');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>Create an account to get started</Text>
        </View>
        <TextField
          label="Name in full"
          value={fullname}
          onChangeText={text => setFullname(text)}
          placeholder="Name in full"
          validated={isEmail}
          onFocus={() => onFocusHandler('name')}
          // onBlur={() => handleValidation('email')}
          iconName="person"
        />
        <TextField
          label="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter email address"
          validated={isEmail}
          onFocus={() => onFocusHandler('email')}
          // onBlur={() => handleValidation('email')}
          iconName="mail"
        />
        <TextField
          label="Phone Number"
          value={pin}
          onChangeText={text => setPin(text)}
          placeholder="Transaction Pin"
          validated={isEmail}
          onFocus={() => onFocusHandler('pin')}
          // onBlur={() => handleValidation('email')}
          iconName="phone-portrait"
        />
        <TextField
          label="Create Password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Create Password"
          validated={isEmail}
          onFocus={() => onFocusHandler('password')}
          // onBlur={() => handleValidation('email')}
          iconName="lock-closed"
          secureTextEntry={true}
        />
        <View style={{flexDirection: 'row', marginTop: hp(1)}}>
          {sexOption.map((s, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setGender(s)}
              style={[
                styles.option,
                {backgroundColor: gender === s ? 'lightgray' : 'white'},
              ]}>
              <Text style={styles.optionText}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => setAccepted(!accepted)}>
            {accepted ? (
              <Ionicons name="md-checkbox" size={25} />
            ) : (
              <Ionicons name="square-outline" size={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.terms}
            onPress={() => navigation.navigate(terms)}>
            <Text style={styles.termsText}>Terms and condition </Text>
          </TouchableOpacity>
        </View>
        {errorMessage ? (
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          </View>
        ) : null}
        <CustomButton
          title="Continue"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={submitHandler}
          isLoading={loading}
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
  icons: {},
  terms: {
    marginLeft: hp(1.5),
  },
  termsText: {
    fontSize: rf(2.3),
    color: Colors.primary,
  },
});

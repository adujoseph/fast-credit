import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import {Colors} from '../../constant/theme';
import {dash, facial} from '../../constant/contant';


const RegisterScreen2 = ({navigation}) => {
    const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [rem, setRem] = useState(false);



  const handleValidation = type => {
  };

  const onFocusHandler = arg => {

  };

  const submitHandler = () => {
      navigation.navigate(facial)
    }
 

    return(
        <>
        <SafeAreaView>
            <TextField
              label="Name in full"
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Enter email address"
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
              label="Create Password"
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Enter email address"
              validated={isEmail}
              onFocus={() => onFocusHandler('email')}
              onBlur={() => handleValidation('email')}
              iconName="locked"
            />
            <CustomButton
            title="Sign up"
            bgColor={Colors.primary}
            txtColor={Colors.white}
            onPress={submitHandler}
          />
      
        </SafeAreaView>
        </>
    )
}
export default RegisterScreen2;
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
import {dash, facial} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';

const RegisterScreen2 = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [rem, setRem] = useState(false);

  const handleValidation = type => {};

  const onFocusHandler = arg => {};

  const uploadHandler = () => {
    navigation.navigate(facial);
  };
  const skipHandler = () => {
    navigation.navigate(dash);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapblock}>
          <TouchableOpacity style={styles.block}>
            <Text>Capture face</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block}>
            <Text>Upload doc (front view)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block}>
            <Text>Upload doc (back view)</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Upload document"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={uploadHandler}
        />
        <CustomButton
          title="Skip for now"
          bgColor={Colors.white}
          txtColor={Colors.primary}
          onPress={skipHandler}
        />
      </SafeAreaView>
    </>
  );
};
export default RegisterScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 20,
  },
  wrapblock: {
    marginBottom: hp(3),
  },
  block: {
    padding: hp(2),
    width: '100%',
    backgroundColor: '#f4f6f5',
    borderRadius: hp(1),
    elevation: 5,
    marginTop: hp(1),
  },
});

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
import {get_request} from '../../services/makeRequest';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const RegisterScreen2 = ({navigation, route}) => {
  const [avatar, setAvatar] = useState('');
  const [frontDoc, setFrontDoc] = useState('');
  const [backDoc, setBackDoc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  let number = route.params.number;

  console.log(number);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserByPhone(number);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const uploadHandler = () => {
    if (avatar === '') {
      setErrorMessage('You must upload an image of you to proceed');
      return;
    }
    try {
      const url = '/UploadFile';
      const payload = {
        file_extention: 'png',
        file_base64: avatar,
        userid: '2022012110473908038493827',
        phone: number,
        fileCat: 'MOI1-FRONT',
      };
    } catch (err) {}
  };
  const skipHandler = () => {
    navigation.navigate(dash);
  };

  const getUserByPhone = async phone => {
    try {
      const url = `/GetUserByPhone/${phone}`;
      const response = await get_request(url);
      if (response) {
        console.log('GET PHONE: ', response);
        // navigation.navigate(dash);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const avatarUpload = () => {
    console.log('Upload');
    let options = {
      title: 'You can choose one image',
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', response);
      console.log(response);
    });
    //   launchCamera(options, response => {
    //     if (response.didCancel) {
    //       console.log('User cancelled photo picker');
    //     } else if (response.error) {
    //       console.log('ImagePicker Error: ', response.error);
    //     } else if (response.customButton) {
    //       console.log('User tapped custom button: ', response.customButton);
    //     } else {
    //       let source = response.assets[0].uri;
    //       let upload = {
    //         uri: source,
    //         type: `image/${source.split('.')[2]}`,
    //         name: source.substring(source.lastIndexOf('/') + 1),
    //       };
    //       // setProfileImg(source);
    //       // handleUpload(upload);
    //       // let img = 'data:image/jpeg;base64,' + response.assets[0].uri;
    //       // upDateImage(img);
    //       // console.log('Response Camera', response.assets[0].uri);
    //     }
    //   });
    // }
  };
  const documentFront = () => {};
  const documentBack = () => {};

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapblock}>
          <TouchableOpacity style={styles.block} onPress={avatarUpload}>
            <Text>Capture face</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block} onPress={documentFront}>
            <Text>Upload doc (front view)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block} onPress={documentBack}>
            <Text>Upload doc (back view)</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Upload document"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={uploadHandler}
          isLoading={loading}
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

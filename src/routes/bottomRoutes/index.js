import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Text,
} from 'react-native';
import {Colors} from '../../constant/theme';
import {Details, Home, payment} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
//screens
import HomeScreen from '../../screen/home/Home';
import PaymentScreen from '../../screen/payment/Payment';
import NotificationScreen from '../../screen/notification/Notification';
import ProfileScreen from '../../screen/profile/ProfileScreen';
import DetailsScreen from '../../screen/productDetails/ProductDetails';
//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  const iconSize = 25;
  return (
    <View style={styles.bottom}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        const onPress = () => {
          console.log(route.name, index);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(index)}
            accessibilityRole="button"
            testID={options.tabBarTestID}>
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Foundation
                    name="home"
                    color={Colors.primary}
                    size={iconSize}
                  />
                ) : (
                  <Foundation name="home" color={Colors.gray} size={iconSize} />
                )}
                <Text>Home</Text>
              </View>
            )}
            {index === 1 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <MaterialComm
                    name="file-document-edit"
                    color={Colors.primary}
                    size={iconSize}
                  />
                ) : (
                  <MaterialComm
                    name="file-document-edit"
                    color={Colors.gray}
                    size={iconSize}
                  />
                )}
                <Text>Payment</Text>
              </View>
            )}

            {index === 2 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <MaterialComm
                    name="floor-plan"
                    color={Colors.primary}
                    size={iconSize}
                    solid
                  />
                ) : (
                  <MaterialComm
                    name="floor-plan"
                    color={Colors.gray}
                    size={iconSize}
                    solid
                  />
                )}
                <Text>Plan</Text>
              </View>
            )}
            {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <MaterialComm
                    name="office-building"
                    color={Colors.primary}
                    size={iconSize}
                    solid
                  />
                ) : (
                  <MaterialComm
                    name="office-building"
                    color={Colors.gray}
                    size={iconSize}
                    solid
                  />
                )}
                <Text>Activity</Text>
              </View>
            )}
            {index === 4 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons
                    name="person-outline"
                    color={Colors.primary}
                    size={iconSize}
                    solid
                  />
                ) : (
                  <Ionicons
                    name="person"
                    color={Colors.gray}
                    size={iconSize}
                    solid
                  />
                )}
                <Text>Profile</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Stack = createStackNavigator();

const BottomTabBottom = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.dark,
      }}>
      <Tabs.Screen name={Home} component={HomeScreen} />
      <Tabs.Screen name={payment} component={PaymentScreen} />
      <Tabs.Screen
        name={'notify'}
        component={NotificationScreen}
        options={{
          tabBarColor: '#9a2c31',
          style: {backgroundColor: 'red'},
        }}
      />
      <Tabs.Screen name={'profile'} component={ProfileScreen} />
      <Tabs.Screen name={'profile2'} component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const BottomStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'order'}
      screenOptions={{
        headerTintColor: Colors.primary,
        headerTransparent: true,
      }}>
      <Stack.Screen
        name={Details}
        component={DetailsScreen}
        options={{
          headerTitle: '',
          headerRight: () => null,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={'order'}
        component={BottomTabBottom}
        options={{
          headerTitle: '',
          headerRight: () => null,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bottom: {
    height: hp(10),
    backgroundColor: '#fff',
    // borderTopLeftRadius: hp(3),
    // borderTopRightRadius: hp(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderWidth: 0.5,
    // borderTopColor: 'lightgray',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  middleIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    bottom: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomStack;

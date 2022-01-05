import React from 'react';
import {View, FlatList} from 'react-native';
import {HomeData} from './HomeData';
import RenderCard from './RenderCard';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Details} from '../../../constant/contant';
import * as RootNavigation from '../../../../rootNavigator';

const LeftComponent = () => {
  const handlePress = (item: any) => {
    RootNavigation.navigate(Details, {item});
  };

  return (
    <>
      <View>
        <FlatList
          data={HomeData}
          renderItem={({item}) => (
            <RenderCard item={item} onPress={() => handlePress(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id.toString()}
          scrollEventThrottle={32}
          removeClippedSubviews={true}
          initialNumToRender={10}
          numColumns={2}
          contentContainerStyle={{paddingBottom: hp(6)}}
        />
      </View>
    </>
  );
};

export default LeftComponent;

import {
  widthPercentageToDP as wpOriginal,
  heightPercentageToDP as hpOriginal,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const wp = (val: number): number => {
  const responsiveVal = (val / screenWidth) * 100;
  return wpOriginal(responsiveVal);
};

export const hp = (val: number): number => {
  const responsiveVal = (val / screenHeight) * 100;
  return hpOriginal(responsiveVal);
};

export const fs = (val: number): number => RFValue(val, 812);

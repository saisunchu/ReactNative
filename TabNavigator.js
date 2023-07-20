import React from "react";
import { StyleSheet } from "react-native";
import { ButtonPrimary, red, white } from "../assets/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from "react-native";

import Home from "./Home";
import Profile from "./Profile";
import CheckIn from "./Checkin";
import Offers from "./Offers";
import Scan from "./Scan";



const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route: { name } }) => ({
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
          //style: { display: 'none' }, // Initially hide the tab bar
          tabBarActiveTintColor: ButtonPrimary,
          tabBarInactiveTintColor: 'lightgray',
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            marginBottom: 5,
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14,
            color: 'grey'
          },
          tabBarIconStyle: {
            width: 20,
            maxHeight: 30,
            marginTop: 0,
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          // options={{
          //   tabBarIcon: ({ color, focused }) => (
          //     <CustomHomeTabBarButton focused={focused} />
          //   ),
          // }}
        />
        {/* <Tab.Screen
          name="Offers"
          component={OffersStack}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon source={offers} color={color} />,
          }}
        /> */}
        <Tab.Screen
          name="Scan"
          component={Scan}
          // options={{
          //   tabBarIcon: props => <CustomScanTabBarButton {...props} />,
          // }}
          // listeners={tabBarListeners}
        />
  
        <Tab.Screen
          name="Offers"
          component={Offers}
          // options={{
          //   tabBarButton: props => <CustomOfferBarButton {...props} />,
          // }}
        />
  
        <Tab.Screen
          name="CheckIn"
          component={CheckIn}
          // options={{
          //   tabBarIcon: ({ color }) => (
          //     <TabBarIcon source={CheckIn} color={color} />
          //   ),
          // }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          // options={{
          //   tabBarIcon: ({ color }) => (
          //     <TabBarIcon source={Profile} color={color} />
          //   ),
          // }}
        />
      </Tab.Navigator>
    );
  };
  
  // const TabBarIcon = ({ source, color }) => (
  //   <FastImage
  //     source={source}
  //     style={{
  //       width: 25,
  //       height: 25,
  //     }}
  //     tintColor={color}
  //     resizeMode={'contain'}
  //   />
  // );
  
  const CustomOfferBarButton = ({ onPress }: any) => (
    <Pressable
      onPress={() => onPress()}>
      {/* <FastImage
        source={offers}
        style={{
          width: 80,
          height: 80,
        }}
        resizeMode={'contain'}
      /> */}
    </Pressable>
  );
  
  export default MyTabs;
  
  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: white,
      height:  Platform.OS === 'ios' ? '11%' : '10%',
      justifyContent: 'center',
      paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    },
    tabBarBtnMainContainer: {
      // width: RF(75),
      // height: RF(75),
      // marginTop: RF(13),
      width: 20,
      height: 20,
    },
    tabBarBtnMainContainerClose: {
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnContainer: {
      width: 20,
      height: 20,
    },
    btnContainerClose: {
      width: 56,
      height: 56,
      borderRadius: 30,
      backgroundColor: red,
    },
    mt10: {
      marginTop: 10,
    },
    homeImage: {
      width: 24,
      height: 24,
    },
  });
  
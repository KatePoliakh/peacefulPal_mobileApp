import React, { useContext } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from "react-native-vector-icons/FontAwesome";
import colors from '../constants/colors';
import { AuthContext } from '../context/AuthContext';
import {RFValue} from "react-native-responsive-fontsize";

const CustomDrawer = props => {
  const {logout} = useContext(AuthContext); 
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: colors.startPageBg}}>
        <ImageBackground
          style={{padding: RFValue(5) }}>
          <Image
            style={{height: RFValue(80),
                width: RFValue(80),
                borderRadius: RFValue(40),
                marginBottom: RFValue(10),
            }}
          />
          <Text
            style={{
                color: '#fff',
                fontSize: RFValue(18),
                marginBottom: RFValue(5),
                fontWeight: 'bold',
            }}>
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: RFValue(10) }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: RFValue(5), borderTopWidth: RFValue(1), borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: RFValue(15)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
           
            <Text
              style={{
                  fontSize: RFValue(15),
                  marginLeft: RFValue(5),
              }}>

            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: RFValue(15)}}>
          <View style={{flexDirection: 'row', alignItems: 'center', left: RFValue(20), bottom: RFValue(20)}}>
              <Icon name="sign-out" size={RFValue(20)} color={colors.BottomButton} />
              <Text
              style={{
                  fontSize: RFValue(15),
                  marginLeft: RFValue(5),
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

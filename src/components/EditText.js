import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

import {FONTS, SIZES, COLORS, FONTFAMILY, SCREENS} from '../constants';
import Icon, {IconType} from './Icons';
import MyTouchableOpacity from './MyTouchableOpacity';

export default function EditText(props) {
  const {title, ForgetPassword} = props;
  const navigation = useNavigation();
  const [borderColor, setBorderColor] = useState(COLORS.black);
  const [show, setshow] = useState('eye');
  const [showText, setShowText] = useState(true);

  const passwordShow = () => {
    if (show === 'eye') {
      setshow('eye-off');
      setShowText(false);
    } else {
      setShowText(true);
      setshow('eye');
    }
  };

  return (
    <View>
      {/* title View */}
      <View
        style={[
          {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: SIZES.fifteen,
          },
          props.styleContainer,
        ]}>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.black,
            },
          ]}>
          {title}
        </Text>
        {ForgetPassword ? (
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.ForgotPassword, {data: props.value});
              1;
            }}>
            <Text
              style={{
                fontSize: SIZES.fifteen,
                color: COLORS.primary,
                fontFamily: FONTFAMILY.Medium,
              }}>
              {ForgetPassword}
            </Text>
          </MyTouchableOpacity>
        ) : null}
      </View>
      {/* EditText  */}
      <View
        style={[
          {
            justifyContent: 'center',
            borderWidth: 1,
            paddingHorizontal: SIZES.fifteen,
            height: SIZES.fifty,
            borderRadius: SIZES.ten,
            borderColor: borderColor,
            marginTop: SIZES.ten,
          },
          props.style,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            {props.hasIcon && (
              <Icon
                type={props.type}
                name={props.name}
                color={borderColor}
                style={{
                  marginRight: SIZES.ten,
                }}
              />
            )}

            <TextInput
              {...props}
              secureTextEntry={props.password ? showText : false}
              selectionColor={COLORS.primary}
              placeholderTextColor={COLORS.gray}
              onFocus={() => {
                setBorderColor(COLORS.primary);
              }}
              onBlur={() => {
                setBorderColor(COLORS.gray);
              }}
              style={[
                FONTS.mediumFont14,
                {
                  flex: 1,
                  height: SIZES.fifty,
                  color: COLORS.black,
                },
              ]}
            />
          </View>
          {props.password ? (
            <Icon
              name={show}
              type={IconType.FontAwesome}
              color={borderColor}
              size={20}
              style={{
                marginLeft: 5,
              }}
              onPress={() => {
                passwordShow();
              }}
            />
          ) : null}
        </View>
        {props.password ? (
          <MyTouchableOpacity
            style={{position: 'absolute', right: SIZES.fifteen}}
            onPress={() => {
              passwordShow();
            }}>
            <Icon
              name={show}
              type={IconType.Feather}
              size={SIZES.twenty * 1.15}
              color={borderColor}
            />
          </MyTouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

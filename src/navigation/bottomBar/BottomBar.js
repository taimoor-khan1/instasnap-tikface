import React, {useEffect, useRef} from 'react';
import {View, Platform, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, IMAGES, SCREENS, SIZES, width} from '../../constants';
import {Icon, IconType} from '../../components';
import AddButton from '../../components/AddButton';
import Profile from '../../screens/profile/Profile';
import More from '../../screens/more/More';
import Gallery from '../../screens/gallery/Gallery';
import {VideoGallery} from '../../screens/gallery';

const Tab = createBottomTabNavigator();

const areEqual = (prevProps, nextProps) => true;

const BottomBar = React.memo(props => {
  const CustomIcon = ({isFocused, image}) => {
    return (
      <View
        style={{
          padding: SIZES.ten - 2,
        }}>
        <Image
          source={image}
          style={[
            {
              height:
                Platform.OS === 'android'
                  ? SIZES.twentyFive * 1.15
                  : SIZES.twenty * 1.15,
              width:
                Platform.OS === 'android'
                  ? SIZES.twentyFive * 1.15
                  : SIZES.twenty * 1.15,
              tintColor: isFocused ? COLORS.primary : COLORS.gray,
            },
          ]}
          resizeMode={'contain'}
        />
      </View>
    );
  };

  const CenterCustomIcon = () => {
    return <AddButton />;
  };

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.Gallery}
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          //   STYLES.shadow,
          {
            position: 'absolute',
            bottom: 0,
            zIndex: 1000000000,
            width: width,
            height: SIZES.fifty * 1.1,
            backgroundColor: COLORS.white,
            borderColor: COLORS.golden,
            borderTopWidth: 0,
            borderWidth: 0,
          },
        ],
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen //1
        name={SCREENS.Gallery}
        component={Gallery}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              image={IMAGES.IconGallery}
              isFocused={focused}
              type={IconType.Ionicons}
              seletedIcon={'grid-outline'}
              unSelectedIcon={'grid-outline'}
            />
          ),
        }}
      />
      <Tab.Screen //2
        name={SCREENS.VideoGallery}
        component={VideoGallery}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              isFocused={focused}
              image={IMAGES.IconVideoEditing}
              type={IconType.MaterialCommunityIcons}
              seletedIcon={'ticket-percent-outline'}
              unSelectedIcon={'ticket-percent-outline'}
            />
          ),
        }}
      />

      <Tab.Screen //3
        name={SCREENS.AddButton}
        component={() => (
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        )}
        options={{
          tabBarIcon: ({color, focused}) => {
            return <CenterCustomIcon isFocused={focused} />;
          },
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />

      <Tab.Screen //4
        name={SCREENS.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              isFocused={focused}
              image={IMAGES.IconUser}
              type={IconType.SimpleLineIcons}
              seletedIcon={'user'}
              unSelectedIcon={'user'}
            />
          ),
        }}
      />
      <Tab.Screen //5
        name={SCREENS.More}
        component={More}
        options={{
          tabBarIcon: ({color, focused}) => (
            <CustomIcon
              image={IMAGES.IconDrawer}
              isFocused={focused}
              type={IconType.Ionicons}
              seletedIcon={'menu-outline'}
              unSelectedIcon={'menu-outline'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}, areEqual);

export default BottomBar;

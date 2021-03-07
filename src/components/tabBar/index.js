import React, {useContext} from 'react';
import {TabArea, TabItem, TabItemCenter, UserAvatar} from './styles';
import {Image, StyleSheet} from 'react-native';
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
import {UserContext} from '../../contexts/UserContext';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
export default ({state, navigation}) => {
  const {state: user} = useContext(UserContext);

  console.log(user);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const activeRoute = (route) => {
    return state.index === route ? 1 : 0.6;
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: activeRoute(0)}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          style={{opacity: activeRoute(1)}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Appointments')}>
        <TodayIcon width="32" height="32" fill="#4eadbe" />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity: activeRoute(3)}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar !== '' ? (
          <Image style={styles.tinyLogo} source={{uri: user.avatar}} />
        ) : (
          <AccountIcon
            style={{opacity: activeRoute(4)}}
            width="24"
            height="24"
            fill="#FFFFFF"
          />
        )}
      </TabItem>
    </TabArea>
  );
};

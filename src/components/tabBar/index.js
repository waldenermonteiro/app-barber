import React from 'react';
import {TabArea, TabItem} from './styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';
export default ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Appointments')}>
        <TodayIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
    </TabArea>
  );
};

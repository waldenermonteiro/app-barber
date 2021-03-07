import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import Api from '../../Api';
export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coordsUser, setCoordsUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState('');
  const handleLocationFinder = async () => {
    setCoordsUser(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);
      Geolocation.getCurrentPosition(
        (info) => {
          setCoordsUser(info.coords);
          getBarbers();
        },
        (error) => console.log(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
        },
      );
    }
  };

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    const result = await Api.getBarbers();
    if (result.error == '') {
      if (result.loc) {
        setLocationText(result.loc);
      }
      setList(result.data);
    } else {
      alert(result.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBarbers();
  }, []);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#ffffff"
            value={locationText}
            onChangeText={(t) => setLocationText(t)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon size="large" color="#FFFFFF" />}
      </Scroller>
    </Container>
  );
};

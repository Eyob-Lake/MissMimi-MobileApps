import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    // Perform logout functionality
    navigation.navigate('Login'); // Replace 'Login' with the appropriate screen name for your login screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={require('./assets/back_arow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Image source={require('./assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Miss Mimi Tutorial Center</Text>
      <TouchableOpacity onPress={handleLogout}>
      <Text style={{backgroundColor:'white', fontSize:18, borderRadius:10}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00bfff',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius:10,
  },
  backButton: {
    paddingLeft: 0,
  },
  backArrow: {
    width: 30,
    height: 30,
    borderRadius:10,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius:10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor:'white',
    borderRadius:10,
  },
  logoutIcon: {
    marginRight: 10,
    color:'blue',
  },
});

export default Header;
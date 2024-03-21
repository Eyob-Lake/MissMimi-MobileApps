import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const firebaseConfig = {
apiKey: "AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM",
authDomain: "missmimi-mobileapps-1ec09.firebaseapp.com",
projectId: "missmimi-mobileapps-1ec09",
storageBucket: "missmimi-mobileapps-1ec09.appspot.com",
messagingSenderId: "31747189796",
appId: "1:31747189796:web:21b4b2d8ef59acfe6dfcb1"
};

const app = initializeApp(firebaseConfig);

const Login = ({ navigation }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [showPassword, setShowPassword] = useState(false);

const handleLogin = async () => {
try {
const roleQuery = query(collection(db, 'role'), where('username', '==', username));
const roleSnapshot = await getDocs(roleQuery);
const user = roleSnapshot.docs.find((doc) => doc.data().password === password);
if (user) {
const role = user.data().role;
switch (role) {
case 'CEO':
console.log('This is CEO Page');
navigation.navigate('CEOHomePage');
break;
case 'Admin':
console.log('This is Admin Page');
navigation.navigate('AdminHomePage');
break;
case 'Instructor':
console.log('This is Instructor Page');
navigation.navigate('InstructHomePage');
break;
case 'Teacher':
console.log('This is Teacher Page');
navigation.navigate('TeacherHomePage');
break;
case 'Parent':
console.log('This is Parent Page');
navigation.navigate('ParentHomePage');
break;
case 'Student':
console.log('This is Student Page');
navigation.navigate('StudentHomePage');
break;
default:
setError('Invalid role.');
}
} else {
setError('Invalid username or password. Please try again.');
}
} catch (error) {
console.error('Login failed:', error);
}
};

const handleForgotPassword = () => {
// Handle forgot password logic here
// Implement your own logic or navigate to the forgot password screen
};

const handleInfoButton = () => {
navigation.navigate('News');
};

return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>Miss Mimi Tutorial Center</Text>
</View>
<View style={styles.content}>
<Image source={require('../assets/logo.jpg')} style={styles.logo} />
<View style={styles.inputContainer}>
  <TextInput
    style={styles.usernameinput}
    placeholder="Username"
    value={username}
    onChangeText={setUsername}
  />
</View>
<View style={styles.passwordContainer }>
  <TextInput
    style={styles.passwordinput}
    placeholder="Password"
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
  />
      <TouchableOpacity
            style={styles.passwordVisibilityButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={18} color="blue" />
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.buttonContainer}>
          <View style={styles.loginAndForgotPasswordContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
              <Text style={styles.buttonText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.infoButton} onPress={handleInfoButton}>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
<View style={styles.footer}>
<Text style={styles.footerText}>© 2024 MMTC All rights reserved</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
container:{
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
},
header: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
borderColor: 'blue',
},
headerText: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
color:'#00bfff',
},
content: {
flex: 4,
justifyContent: 'center',
alignItems: 'center',
},
logo: {
width: 150,
height: 150,
marginBottom: 30,
},
usernameinput: {
height: 40,
borderWidth: 1,
borderColor: 'blue',
borderRadius: 10,
marginBottom: 10,
width: '90%',
marginLeft: 10,
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
},
passwordContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
passwordinput:{
  height: 40,
  borderWidth: 1,
  borderColor: 'blue',
  borderRadius: 10,
  marginBottom: 10,
  width: '90%',
  marginRight: 50,
},
passwordVisibilityButton: {
marginLeft: -75,
borderColor: 'blue',
borderRadius: 10,
marginBottom: 10,

},
error: {
color: 'red',
marginBottom: 10,
},
buttonContainer: {
width: '80%',
marginBottom: 10,
},
loginAndForgotPasswordContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
loginButton: {
width: '48%',
height: 40,
backgroundColor: '#1e90ff',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 40,
},
forgotPasswordButton: {
width: '48%',
height: 40,
backgroundColor: 'gray',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20,
borderColor: 'blue',
},
buttonText: {
color: 'white',
fontWeight: 'bold',
},
infoButton: {
width: 60,
height: 40,
backgroundColor: '#696969',
justifyContent: 'center',
alignItems: 'center',
borderColor: 'blue',
borderRadius: 15,
marginBottom: 10,
},
footer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
borderColor: 'blue',
},
footerText: {
fontSize: 13,
color: '#00bfff',
},
});

export default Login;
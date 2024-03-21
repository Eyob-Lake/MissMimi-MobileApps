import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from '../Header';

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM",
  authDomain: "missmimi-mobileapps-1ec09.firebaseapp.com",
  projectId: "missmimi-mobileapps-1ec09",
  storageBucket: "missmimi-mobileapps-1ec09.appspot.com",
  messagingSenderId: "31747189796",
  appId: "1:31747189796:web:21b4b2d8ef59acfe6dfcb1"
};

const app = initializeApp(firebaseConfig);

const RolePage = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      const docRef = await addDoc(collection(db, 'brunches'), {
        fullName: fullName,
        password: password,
        role: role,
      });
      console.log('Data registered successfully!', docRef.id);
      // Perform any additional actions after successful registration
    } catch (error) {
      console.error('Error registering data:', error);
    }
  };

  return (
    <View>
      <Header />

      <View>
        <Text>Set Admin For Brunch</Text>
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Role"
          value={role}
          onChangeText={setRole}
        />
        {/* Submit Button */}
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  submitButton: {
    backgroundColor: '#007AFF',
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center',
  },
};

export default RolePage;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase';
import Header from '../Header';

const RolePage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [roleId, setRoleId] = useState(''); // Add roleId state variable

  const handleRegister = async () => {
    try {
      const roleData = {
        username: username,
        password: password,
        role: role,
      };

      // Get a reference to the Firestore collection
      const collectionRef = collection(db, 'role');

      // Add a new document with auto-generated ID
      const docRef = await addDoc(collectionRef, roleData);

      Alert.alert('Role Registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleDelete = async () => {
    try {
      // Get a reference to the document in the "role" collection
      const docRef = doc(db, 'role', roleId);

      // Delete the document
      await deleteDoc(docRef);

      Alert.alert('Role deleted successfully!');
    } catch (error) {
      console.error('Error deleting role:', error);
    }
  };
  return (
    
    <View style={styles.container}>
    <Header/>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { marginRight: 8, marginTop:60}]} onPress={handleRegister}>
          <Text style={styles.buttonText}>Assign Role</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginRight: 8, marginTop:60}]} onPress={() => navigation.navigate('ViewRole')}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 12,
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 29,
    marginBottom: 6,
    paddingLeft: 8,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RolePage;
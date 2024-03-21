import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import Header from '../Header';

const firebaseConfig = {
  apiKey: "AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM",
  authDomain: "missmimi-mobileapps-1ec09.firebaseapp.com",
  projectId: "missmimi-mobileapps-1ec09",
  storageBucket: "missmimi-mobileapps-1ec09.appspot.com",
  messagingSenderId: "31747189796",
  appId: "1:31747189796:web:21b4b2d8ef59acfe6dfcb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GiveGrant = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [readGrant, setReadGrant] = useState(false);
  const [writeGrant, setWriteGrant] = useState(false);
  const [updateGrant, setUpdateGrant] = useState(false);
  const [deleteGrant, setDeleteGrant] = useState(false);

  const grantAccess = async () => {
    try {
      const firestore = db;
      const mainCollectionRef = collection(firestore, 'mainCollection');
      
      const subcollections = [
        'student',
        'staff',
        'payment',
        'exam',
        'userRole',
        'rest',
        'material',
        'teacher',
        'attendance',
        'studCommunication',
        'selfCommunication',
        'request'
      ];

      const grantOptions = {
        read: readGrant,
        write: writeGrant,
        update: updateGrant,
        delete: deleteGrant
      };

      for (const subcollection of subcollections) {
        const subcollectionRef = doc(mainCollectionRef, subcollection);
        await setDoc(subcollectionRef, grantOptions);
      }

      setUsername('');
      setPassword('');
      setRole('');
      setReadGrant(false);
      setWriteGrant(false);
      setUpdateGrant(false);
      setDeleteGrant(false);

      Alert.alert('Access Granted', 'Subcollections created successfully.');
    } catch (error) {
      console.error("Error granting access:", error);
      Alert.alert('Access Error', 'An error occurred while granting access.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Role"
        value={role}
        onChangeText={setRole}
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>View data</Text>
        <CheckBox
          checked={readGrant}
          onPress={() => setReadGrant(!readGrant)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Write data</Text>
        <CheckBox
          checked={writeGrant}
          onPress={() => setWriteGrant(!writeGrant)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Update data</Text>
        <CheckBox
          checked={updateGrant}
          onPress={() => setUpdateGrant(!updateGrant)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Delete data</Text>
        <CheckBox
          checked={deleteGrant}
          onPress={() => setDeleteGrant(!deleteGrant)}
        />
      </View>
      <TouchableOpacity onPress={grantAccess} style={styles.button}>
        <Text style={styles.buttonText}>Grant Access</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default GiveGrant;
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
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

const CreateDatabase = () => {
const [collectionName, setCollectionName] = useState('');
const navigation = useNavigation();

const createMainCollection = async (collectionName) => {
try {
const firestore = db;
const mainCollectionRef = collection(db, collectionName);
navigation.navigate('GiveGrant', { collectionName: collectionName });
} catch (error) {
console.error("Error creating main collection:", error);
}
};

return (
<View style={styles.container}>
<Header />
<Text style={styles.title}>Create Database by Inserting the Branch Name</Text>
<TextInput placeholder="Create Branch" value={collectionName} onChangeText={setCollectionName} style={styles.input} />
<TouchableOpacity onPress={() => createMainCollection(collectionName)} style={styles.button}>
<Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
},
title: {
fontSize: 20,
marginBottom: 20,
},
input: {
height: 40,
borderWidth: 1,
borderColor: 'blue',
borderRadius: 10,
marginBottom: 10,
width: '90%',
paddingHorizontal: 10,
},
button: {
backgroundColor: 'blue',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 20,
marginTop: 110,
},
buttonText: {
color: 'white',
fontWeight: 'bold',
textAlign: 'center',
},
});

export default CreateDatabase;
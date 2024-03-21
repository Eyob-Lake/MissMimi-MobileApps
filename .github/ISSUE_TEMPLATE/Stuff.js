import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { DocumentPicker, DocumentPickerTypes } from 'expo-document-picker';
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import Header from '../Header';
import * as Permissions from 'expo-permissions';
const firebaseConfig = {
  apiKey: 'AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM',
  authDomain: 'missmimi-mobileapps-1ec09.firebaseapp.com',
  projectId: 'missmimi-mobileapps-1ec09',
  storageBucket: 'missmimi-mobileapps-1ec09.appspot.com',
  messagingSenderId: '31747189796',
  appId: '1:31747189796:web:21b4b2d8ef59acfe6dfcb1',
};

initializeApp(firebaseConfig);
const db = getFirestore();

const Stuff = () => {
  const [eId, setEId] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [university, setUniversity] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [completeFile, setCompleteFile] = useState(null); // Initialize with null instead of an empty string
  const [stuff1List, setStuff1List] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'stuff1'), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setStuff1List(data);
    });
    return () => unsubscribe();
  }, []);

  const handleFileSelection = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please grant permission to access files.');
        return;
      }

      let result;
      if (Platform.OS === 'web') {
        result = await DocumentPicker.getDocumentAsync();
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
        });
      }

      if (!result.cancelled) {
        setCompleteFile(result);
      }
    } catch (error) {
      console.error('Error selecting file:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        eId &&
        fullName &&
        gender &&
        dateOfBirth &&
        birthPlace &&
        maritalStatus &&
        educationLevel &&
        university &&
        workExperience &&
        completeFile
      ) {
        await addDoc(collection(db, 'stuff1'), {
          eId,
          fullName,
          gender,
          dateOfBirth,
          birthPlace,
          maritalStatus,
          educationLevel,
          university,
          workExperience,
          completeFile: completeFile.uri, // Store only the file URI in the database
        });
        setEId('');
        setFullName('');
        setGender('');
        setDateOfBirth('');
        setBirthPlace('');
        setMaritalStatus('');
        setEducationLevel('');
        setUniversity('');
        setWorkExperience('');
        setCompleteFile(null); // Reset completeFile to null after submission
        Alert.alert('Success', 'Data submitted successfully!');
      } else {
        Alert.alert('Validation Error', 'Please fill in all fields.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      Alert.alert('Error', 'Failed to submit data. Please try again.');
    }
  };
const navigation = useNavigation();
return (
<View style={styles.container}>
<Header />
<ScrollView contentContainerStyle={styles.scrollContainer}>
<View style={styles.formContainer}>
<TextInput style={styles.input} placeholder="EID" value={eId} onChangeText={setEId} />
<TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
<View style={styles.radioContainer}>
<Text style={styles.label}>Gender:</Text>
<View style={styles.radioOption}>
<RadioButton
value="male"
status={gender === 'male' ? 'checked' : 'unchecked'}
onPress={() => setGender('male')}
/>
<Text style={styles.radioLabel}>Male</Text>
</View>
<View style={styles.radioOption}>
<RadioButton
value="female"
status={gender === 'female' ? 'checked' : 'unchecked'}
onPress={() => setGender('female')}
/>
<Text style={styles.radioLabel}>Female</Text>
</View>
</View>
<TextInput style={styles.input} placeholder="Date of Birth" value={dateOfBirth} onChangeText={setDateOfBirth} />
<TextInput style={styles.input} placeholder="Birth Place" value={birthPlace} onChangeText={setBirthPlace} />
<View style={styles.radioContainer}>
<Text style={styles.label}>Marital Status:</Text>
<View style={styles.radioOption}>
<RadioButton
value="single"
status={maritalStatus === 'single' ? 'checked' : 'unchecked'}
onPress={() => setMaritalStatus('single')}
/>
<Text style={styles.radioLabel}>Single</Text>
</View>
<View style={styles.radioOption}>
<RadioButton
value="married"
status={maritalStatus === 'married' ? 'checked' : 'unchecked'}
onPress={() => setMaritalStatus('married')}
/>
<Text style={styles.radioLabel}>Married</Text>
</View>
</View>
<TextInput style={styles.input} placeholder="Education Level" value={educationLevel} onChangeText={setEducationLevel} />
<TextInput style={styles.input} placeholder="University" value={university} onChangeText={setUniversity} />
<TextInput style={styles.input} placeholder="Work Experience" value={workExperience} onChangeText={setWorkExperience} />
<TouchableOpacity style={styles.fileButton} onPress={handleFileSelection}>
  <Text style={styles.fileButtonText}>Select File</Text>
</TouchableOpacity>
<Text style={styles.selectedFile}>{completeFile ? completeFile.name : 'No file selected'}</Text>
<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
<Text style={styles.submitButtonText}>Submit</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.ViewButton} onPress={() => navigation.navigate('ViewStuff')}>
<Text style={styles.submitButtonText}>View</Text>
</TouchableOpacity>
</View>
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
scrollContainer: {
flexGrow: 1,
justifyContent: 'center',
alignItems: 'center',
paddingVertical: 20,
},
formContainer: {
width: '80%',
alignItems: 'center',
},
input: {
width: '100%',
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginBottom: 10,
paddingHorizontal: 10,
borderRadius:10,
},
radioContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
label: {
marginRight: 10,
fontWeight: 'bold',
},
radioOption: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 20,
},
radioLabel: {
marginLeft: 5,
},
fileButton: {
width: '100%',
height: 40,
backgroundColor: '#2196F3',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 4,
marginBottom: 10,
},
UploadButton:{
  width: '100%',
  height: 40,
  backgroundColor: '#2196F3',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  marginBottom: 10,
},
fileButtonText: {
color: '#fff',
fontWeight: 'bold',
},
selectedFile: {
marginBottom: 10,
},
submitButton: {
width: 60,
height: 40,
backgroundColor: '#4CAF50',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 4,
marginLeft: -170,
marginBottom: -40,
},
ViewButton: {
  width: 60,
  height: 40,
  backgroundColor: '#4CAF50',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  marginLeft: 130,
},
submitButtonText: {
color: '#fff',
fontWeight: 'bold',
},
});

export default Stuff;
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
const Student = () => {
  const [sid, setSid] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [branch, setBranch] = useState('');
  const [block, setBlock] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [studentImageUri, setStudentImageUri] = useState(null);
  const [parentImageUri, setParentImageUri] = useState(null);
  const handleGenderChange = (value) => {
    setGender(value);
  };
  const handleFormSubmit = async () => {
    console.log('Submit button clicked!');
    const db = initializeFirebaseApp();
    if (studentImageUri && parentImageUri) {
      const studentData = {
        sid,
        fullName,
        gender,
        schoolName,
        classLevel,
        registrationDate,
        branch,
        block,
        houseNumber,
        studentImageUri,
        parentImageUri,
      };
      try {
        await addDoc(collection(db, 'students'), studentData);
        console.log('Student added successfully!');
        Alert.alert('Student Is Registor Succefully');
        // Reset the form fields
        setSid('');
        setFullName('');
        setGender('');
        setSchoolName('');
        setClassLevel('');
        setRegistrationDate('');
        setBranch('');
        setBlock('');
        setHouseNumber('');
        setStudentImageUri(null);
        setParentImageUri(null);
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };
    const pickImage = async (type) => {
      const options = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      };
      try {
        if (type === 'studentImage') {
          const result = await ImagePicker.launchImageLibraryAsync(options);
          if (!result.cancelled) {
            setStudentImageUri(result.uri);
          }
        }
  
        if (type === 'parentImage') {
          const result = await ImagePicker.launchImageLibraryAsync(options);
          if (!result.cancelled) {
            setParentImageUri(result.uri);
          }
        }
      } catch (error) {
        console.error('Error picking image: ', error);
      }
    };
const navigation = useNavigation();
return (
<ScrollView>
<View>
<Header title="Student Form" />
<View style={styles.formContainer}>
<TextInput
style={styles.input}
placeholder="SID"
value={sid}
onChangeText={(text) => setSid(text)}
/>
<TextInput
style={styles.input}
placeholder="Full Name"
value={fullName}
onChangeText={(text) => setFullName(text)}
/>
<View style={styles.radioContainer}>
<Text style={styles.label}>Gender:</Text>
<View style={styles.radioOption}>
<RadioButton
value="male"
status={gender === 'male' ? 'checked' : 'unchecked'}
onPress={() => handleGenderChange('male')}
/>
<Text style={styles.radioLabel}>Male</Text>
</View>
<View style={styles.radioOption}>
<RadioButton
value="female"
status={gender === 'female' ? 'checked' : 'unchecked'}
onPress={() => handleGenderChange('female')}
/>
<Text style={styles.radioLabel}>Female</Text>
</View>
</View>
<TextInput
style={styles.input}
placeholder="School Name"
value={schoolName}
onChangeText={(text) => setSchoolName(text)}
/>
<TextInput
style={styles.input}
placeholder="Class Level"
value={classLevel}
onChangeText={(text) => setClassLevel(text)}
/>
<TextInput
style={styles.input}
placeholder="Registration Date"
value={registrationDate}
onChangeText={(text) => setRegistrationDate(text)}
/>
<TextInput
style={styles.input}
placeholder="Branch"
value={branch}
onChangeText={(text) => setBranch(text)}
/>
<TextInput
style={styles.input}
placeholder="Block"
value={block}
onChangeText={(text) => setBlock(text)}/>
<TextInput
style={styles.input}
placeholder="House Number"
value={houseNumber}
onChangeText={(text) => setHouseNumber(text)}/>
<TouchableOpacity style={styles.imagePickerButton} onPress={() => pickImage('studentImage')}>
  <Text style={styles.imagePickerButtonText}>Pick Student Image</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.imagePickerButton} onPress={() => pickImage('parentImage')}>
  <Text style={styles.imagePickerButtonText}>Pick Parent Image</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
  <Text style={styles.submitButtonText}>Submit</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.ViewButton} onPress={() => navigation.navigate('ViewStudent')}>
<Text style={styles.submitButtonText}>View</Text>
</TouchableOpacity>
</View>
</View>
</ScrollView>
);
};
const styles = StyleSheet.create({
formContainer: {
padding: 20,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginBottom: 10,
paddingHorizontal: 10,
borderRadius: 9,
borderColor: 'blue',
},
radioContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
label: {
marginRight: 10,
fontSize: 16,
},
radioOption: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 20,
color: 'black',
borderEndColor: 'blue',
},
radioLabel: {
fontSize: 16,
},
imagePickerButton: {
backgroundColor: '#2196F3',
padding: 10,
marginVertical: 10,
alignItems: 'center',
borderRadius: 9,
},
imagePickerButtonText: {
color: 'black',
fontSize: 16,
},
imagePreview: {
width: 200,
height: 200,
marginBottom: 10,
borderRadius: 19,
},
submitButton: {
backgroundColor: 'blue',
padding: 10,
marginVertical: 10,
alignItems: 'center',
width: 80,
borderRadius: 10,
},
ViewButton: {
width: 80,
backgroundColor: 'blue',
padding: 10,
borderRadius: 10,
marginLeft: 200,
marginTop: -55,
},
submitButtonText: {
color: '#FFF',
fontSize: 16,
},
});
export default Student;
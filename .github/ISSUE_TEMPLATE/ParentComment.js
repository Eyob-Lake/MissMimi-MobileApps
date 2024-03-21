import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Header from '../Header';

const ParentComment = ({ onSendComment }) => {
const [comment, setComment] = useState('');

const handleSend = () => {
  // Perform action to send the comment to a different page
  console.log('Sending comment:', comment);
  // Reset the comment input
  setComment('');

  // Call the callback function to pass the comment to the parent component
  onSendComment(comment);

  // Clear the comment in the parent component
  setComment('');
};
return (
<View style={styles.container}>
<Header />
<View style={styles.commentContainer}>
<TextInput
style={styles.input}
placeholder="Type your comment..."
multiline={true} // Update to use a multiline TextInput
numberOfLines={4} // Specify the number of lines to display
value={comment}
onChangeText={setComment}
/>
<TouchableOpacity style={styles.sendButton} onPress={handleSend}>
<Text style={styles.sendButtonText}>Send</Text>
</TouchableOpacity>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
},
commentContainer: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 10,
borderTopWidth: 1,
borderTopColor: 'gray',
},
input: {
flex: 1,
height: 80, // Adjust the height to accommodate multiple lines
borderColor: 'gray',
borderWidth: 1,
marginRight: 10,
paddingHorizontal: 10,
paddingTop: 10, // Add padding at the top to align text properly
},
sendButton: {
backgroundColor: 'blue',
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius: 5,
},
sendButtonText: {
color: 'white',
fontWeight: 'bold',
},
});

export default ParentComment;
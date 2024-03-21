import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Page/Login';
import News from './Page/News';
import AboutUs from './Page/AboutUs'
import CEOHomePage from './CEOPage/CEOHomePage';
import AdminHomePage from './AdminPage/AdminHomePage';
import TeacherHomePage from './TeacherPage/TeacherHomePage';
import InstructHomePage from './InstructPage/InstructHomePage';
import InstructorReport from './InstructPage/InstructorReport';
import ParentHomePage from './ParentPage/ParentHomePage';
import ParentComment from './ParentPage/ParentComment';
import StudentHomePage from './StudentPage/StudentHomePage';
import RolePage from './Page/RolePage';
import Stuff from './AdminPage/Stuff';
import Student from './AdminPage/Student';
import Exam from './AdminPage/Exam';
import Payment from './AdminPage/ManagePayment';
import Request from './AdminPage/Request';
import Respt from './AdminPage/Respt';
import AsighnRole from './AdminPage/AsighnRole';
import CreateDatabase from './CEOPage/CreateDatabase';
import GiveGrant from './CEOPage/GiveGrant';
import SMaterial from './StudentPage/SMaterial';
import TeacherRequest from './TeacherPage/Request';
import TeacherAttendance from './TeacherPage/TeacherAttendance';
import TeacherMaterial from './TeacherPage/TeacherMaterial';
import TechCommunication from './TeacherPage/TechCommunicetion';
import StudCommunication from './TeacherPage/StudCommunicetion';
import InstaructorMaterial from './InstructPage/InatructorMaterial';
import InstructorReplyRequest from './InstructPage/InstructorReplyRequst';
import InstructorTeacher from './InstructPage/InstructorTeacher';
import ViewExam from './AdminPage/ViewExam';
import ViewStudent from './AdminPage/ViewStudent';
import ViewRole from './AdminPage/ViewRole';
import ViewStuff from './AdminPage/ViewStuff';
import { CEOINSProvider } from './CEOINSContext';  // Update the import statement
import CEOReport from './CEOPage/CEOReport';
const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
      <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
      <Stack.Screen name="CEOHomePage" component={CEOHomePage}  options={{ headerShown: false }}/>
      <Stack.Screen name="AdminHomePage" component={AdminHomePage}  options={{ headerShown: false }}/>
     <Stack.Screen name='InstructHomePage' component={InstructHomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="TeacherHomePage" component={TeacherHomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="ParentHomePage" component={ParentHomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="ParentCommente" component={ParentComment} options={{ headerShown: false }}/>
      <Stack.Screen name="StudentHomePage" component={StudentHomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="RolePage" component={RolePage} options={{ headerShown: false }}/>
      <Stack.Screen name="Stuff" component={Stuff} options={{ headerShown: false }}/>
      <Stack.Screen name="Student" component={Student} options={{ headerShown: false }}/>
      <Stack.Screen name="Exam" component={Exam} options={{ headerShown: false }}/>
      <Stack.Screen name="ParentComment" component={ParentComment} options={{ headerShown: false }}/>
      <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }}/>
      <Stack.Screen name="Request" component={Request} options={{ headerShown: false }}/>
      <Stack.Screen name="Respt" component={Respt} options={{ headerShown: false }}/>
      <Stack.Screen name="AsighnRole" component={AsighnRole} options={{ headerShown: false }}/>
      <Stack.Screen name="SMaterial" component={SMaterial} options={{ headerShown: false }}/>
      <Stack.Screen name="Paayement" component={Payment} options={{ headerShown: false }}/>
      <Stack.Screen name="ViewStuff" component={ViewStuff} options={{ headerShown: false }}/>
      <Stack.Screen name="ViewRole" component={ViewRole} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateDatabase" component={CreateDatabase} options={{ headerShown: false }}/>
      <Stack.Screen name="GiveGrant" component={GiveGrant}  options={{ headerShown: false }}/>
      <Stack.Screen name="ViewStudent" component={ViewStudent}  options={{ headerShown: false }}/>
      <Stack.Screen name="TeaherReport" component={TeacherRequest}  options={{ headerShown: false }}/>
      <Stack.Screen name="StudCommunication" component={StudCommunication}  options={{ headerShown: false }}/>
      <Stack.Screen name="TeaherMaterial" component={TeacherMaterial}  options={{ headerShown: false }}/>
      <Stack.Screen name="TeaherAttendance" component={TeacherAttendance}  options={{ headerShown: false }}/>
      <Stack.Screen name="TeacherRequest" component={TeacherRequest}  options={{ headerShown: false }}/>
      <Stack.Screen name="TechCommunication" component={TechCommunication}  options={{ headerShown: false }}/>
      <Stack.Screen name="InstructorReport" component={InstructorReport}  options={{ headerShown: false }}/>
      <Stack.Screen name="InstaructorMaterial" component={InstaructorMaterial} options={{ headerShown: false }}/>
      <Stack.Screen name="InstructorReplyRequest" component={InstructorReplyRequest} options={{ headerShown: false }}/>
      <Stack.Screen name="InstructorTeacher" component={InstructorTeacher} options={{ headerShown: false }}/>
      <Stack.Screen name="ViewExam" component={ViewExam} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};
export default NavigationStack;
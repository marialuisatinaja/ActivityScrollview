import React from 'react';
import { FlatList, StyleSheet, View , ScrollView,} from 'react-native';
import HTML from 'react-native-render-html';


const userData =[
  {
    id:'1',
    firstname: 'Luisa',
    lastname: 'Tinaja',
    course: 'BSIT',
    yearSection: '3A',
    username: 'tinajamaria',
    password: 'maria231',
    userType: 'student',
  },
  {
    id:'2',
    firstname: 'Melrose',
    lastname: 'Valiente',
    course: 'BSIT',
    yearSection: '3A',
    username: 'valinetemelrose',
    password: 'melrose231',
    userType: 'student',
  },
  {
    id:'3',
    firstname: 'Lovelyn',
    lastname: 'Magsino',
    course: 'BSIT',
    yearSection: '3A',
    username: 'lovelynmagsino',
    password: 'love563',
    userType: 'student',
  },
  {
    id:'4',
    firstname: 'Jerry',
    lastname: 'Ale',
    course: '',
    yearSection: '',
    username: 'alejerry',
    password: 'ale231',
    userType: 'teacher',
  },
  {
    id:'5',
    firstname: 'Fermo',
    lastname: 'Asufra',
    course: ' ',
    yearSection: '',
    username: 'asufrafermo',
    password: 'asufra321',
    userType: 'teacher',
  },

];



export default function App() {
  const scrollView = `
  <table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>COURSE</th>
    <th>YEAR & SECTION</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td>${user.course}</td>
        <td>${user.yearSection}</td>
      </tr>
    `
  ).join('')}
</table>
`;

const tableHtml = `
<table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>USERNAME</th>
    <th>PASSWORD</th>
    <th>USERTYPE</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.userType}</td>
      </tr>
    `
  ).join('')}
</table>
`;

  const studentData = userData.filter((user) => user.userType === 'student');

  
  



  return (
    <View style={styles.container}>
    <View style={styles.plainMap}>
      <HTML source={{ html: tableHtml }} />
      </View>
      <ScrollView style={styles.scroolViu}>
        <HTML source={{html:scrollView}}/>
      </ScrollView>

      <FlatList
  data={studentData}
  keyExtractor={(student) => student.id}
  renderItem={({ item }) => (
    <HTML
      source={{
        html: `
          <table style="border: 1px solid black; width: 100%">
            <tr>
              <th>ID</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
            </tr>
            <tr key=${item.id}>
              <td>${item.id}</td>
              <td>${item.firstname}</td>
              <td>${item.lastname}</td>
            </tr>
          </table>
        `,
      }}
    />
  )}
  style={styles.flatLest}
/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plainMap: {
    width: '95%',
    margin: 10,
  },
  scroolViu: {
    width: '95%',
    margin: 10,
  },
  
  flatLest: {
    width: '95%',
  },
});

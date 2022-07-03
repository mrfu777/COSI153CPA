import { StyleSheet, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as ImagePicker from 'expo-image-picker';
import * as React from "react";
import {useState} from "react";
import {addPlayer} from "../data/datas";

export default function TabTwoScreen() {
  const [poster, setPoster] = useState('');
  const [fullname, setFullname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [position, setPosition] = useState('');
  const [introduction, setIntroduction] = useState('');
  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setPoster(result.uri);
    }
  }
  const handleCreate = () => {
    addPlayer(
      fullname,
      birthday,
      introduction,
      position,
      poster
    );
    alert('Success!');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add Player</Text>
        <View style={styles.row}>
          <Text>Full name: </Text>
          <TextInput style={styles.input}
                     value={fullname}
                     onChangeText={setFullname}
                     placeholder={'Enter player fullname'}/>
        </View>
        <View style={styles.row}>
          <Text>Birthday: </Text>
          <TextInput style={styles.input}
                     value={birthday}
                     onChangeText={setBirthday}
                     placeholder={'Eg. 1985-12-02'}/>
        </View>
        <View style={styles.row}>
          <Text>Position: </Text>
          <TextInput style={styles.input}
                     value={position}
                     onChangeText={setPosition}
                     placeholder={'Enter player position'}/>
        </View>
        <View style={styles.row}>
          <Text>Introduction: </Text>
          <TextInput style={styles.textarea}
                     value={introduction}
                     onChangeText={setIntroduction}
                     placeholder={'Enter player introduction'} />
        </View>
        <View style={styles.row}>
          <Text>Poster Image: </Text>
          <FontAwesome onPress={handleSelectImage} size={100} style={{ marginBottom: -3 }} name={'image'} color={'rgb(17, 236, 229)'}  />
        </View>
        { poster !== '' &&
          <>
            <Pressable onPress={handleCreate} style={styles.selectImageBtn}>
              <Text style={styles.selectImageBtnText}>Submit</Text>
            </Pressable>
            <Image source={{uri: poster}} style={styles.poster} />
          </>
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  selectImageBtn: {
    padding: 10,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 20,
    width: '70%',
    backgroundColor: '#4fccff',
  },
  poster: {
    width: '70%',
    height: 400
  },
  selectImageBtnText: {
    textAlign: 'center',
    color: 'white'
  },
  textarea: {
    padding: 10,
    margin: 0,
    textAlignVertical: 'top',
    borderWidth: 1,
    height: 170,
  },
  row: {
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex'
  },
  input: {
    padding: 10,
    width: '70%',
    height: 40,
    borderWidth: 1
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

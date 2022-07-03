import { StyleSheet, TextInput, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useState} from "react";
import {changeCurrentName} from "../data/datas";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [fullname, setFullname] = useState('');
  const handleSearch = () => {
    changeCurrentName(fullname);
    navigation.push('Profile');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NBA</Text>
      <TextInput value={fullname}
                 onChangeText={setFullname}
                 style={styles.input}
                 placeholder={'Enter Player Name'}/>
      <Pressable style={styles.searchBtn} onPress={handleSearch}>
        <Text>SEARCH</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 140,
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 20,
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 5
  },
  searchBtn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: '80%',
    backgroundColor: '#79b8ff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

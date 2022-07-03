import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {getMatchedPlayer, Player} from '../data/datas';
import {useEffect, useState} from "react";
function Profile() {
  const [player, setPlayer] = useState<Player | undefined>(undefined);
  useEffect(() => {
    setPlayer(getMatchedPlayer());
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {player && (
          <>
            <Image source={{uri: player.poster}} style={styles.poster} />
            <Text style={styles.title}>{player.fullname}</Text>
            <View >
              <Text>Birthday: {player.birthday}</Text>
            </View>
            <View >
              <Text>Position: {player.position}</Text>
            </View>
            <Text style={styles.introduction}>{player.introduction}</Text>
          </>
        )}
        {!player && (
          <Text>Sorry, didn't found this player!</Text>
        )}
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginTop: 40,
    fontSize: 30,
    color: '#0a98ef',
    fontWeight: 'bold'
  },
  introduction: {
    padding: 10,
    fontSize: 12
  },
  poster: {
    width: '70%',
    height: 400
  },
  row: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Profile;
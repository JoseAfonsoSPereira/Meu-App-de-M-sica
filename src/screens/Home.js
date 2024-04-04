import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const item={
    id: 1,
    title: "Seven Nation Army",
    group: "The White Stripes",
    album_image: "https://i.scdn.co/image/ab67616d0000b273a69f71a8794e2d867a52f98f",
    album: "Elephant",
    year: 2003,
    genre: "Rock",
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem isPlaying={() => currentPlaying == item.id} music={item} navigation={navigation} onPlayPause={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: { 
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  },
})
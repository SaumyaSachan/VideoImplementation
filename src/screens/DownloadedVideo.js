import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const downloadedVideos = [
  {
    id: '1',
    title: 'Squid Game S1E1',
    duration: '2h 37m',
    thumbnail: require('../../assets/Intro2.png'),
  },
  {
    id: '2',
    title: 'Kabir Singh',
    duration: '2h 15m',
    thumbnail: require('../../assets/Intro1.png'),
  },
];

const DownloadedVideo = ({ navigation }) => {
  const handlePlay = (video) => {
    navigation.navigate('VideoDetailScreen', {
      videoData: {
        title: video.title,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // replace with actual downloaded file URI
      },
    });
  };

  const handleDelete = (video) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete "${video.title}" from downloads?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => console.log('Deleted', video.id) },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
      <TouchableOpacity onPress={() => handlePlay(item)}>
        <FontAwesome name="play-circle" size={24} color="#4ac4fa" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item)}>
        <FontAwesome name="trash" size={22} color="#ff4c4c" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Downloads</Text>
      <FlatList
        data={downloadedVideos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default DownloadedVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041524',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#071b30',
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 6,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  duration: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
  },
  icon: {
    marginHorizontal: 8,
  },
});

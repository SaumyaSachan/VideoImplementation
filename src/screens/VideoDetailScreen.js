import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlayVideo from '../components/PlayVideo';
import DownloadQuality from '../components/DownloadQuality';
import CastCardList from '../components/CastCardList';

const VideoDetailScreen = ({ route }) => {
  const { title = "Squid Game" } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PlayVideo />

        {/* Title + Action Icons */}
        <View style={styles.titleRow}>
          <Text style={styles.videoTitle}>{title}</Text>
          <View style={styles.icons}>
            <FontAwesome name="share-alt" size={20} color="white" style={styles.icon} />
            <FontAwesome name="heart-o" size={20} color="white" style={styles.icon} />
          </View>
        </View>

        {/* Meta Info */}
        <Text style={styles.metaText}>8.6 <FontAwesome name="imdb" size={16} />  |  2h 37m</Text>
        <Text style={styles.genreText}>Action, Adventure, Fantasy</Text>
        <Text style={styles.description}>
          An idealistic FBI agent is enlisted by a government task force to aid in the escalating war...
        </Text>
        <Text style={styles.detailText}><Text style={styles.label}>Director:</Text> Denis Villenueve</Text>
        <Text style={styles.detailText}><Text style={styles.label}>Country:</Text> UK, USA</Text>
        <Text style={styles.detailText}><Text style={styles.label}>Release:</Text> 2021</Text>

        {/* Download & Playlist */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <FontAwesome name="list" size={18} color="#fff" />
            <Text style={styles.actionText}>Playlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={() => setModalVisible(true)}>
            <FontAwesome name="download" size={18} color="#fff" />
            <Text style={styles.actionText}>Download</Text>
          </TouchableOpacity>
        </View>

        {/* Cast Members */}
        <Text style={styles.sectionTitle}>Cast</Text>
        <CastCardList />
      </ScrollView>

      <DownloadQuality visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default VideoDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#041524' },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  videoTitle: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  icons: { flexDirection: 'row' },
  icon: { marginLeft: 15 },
  metaText: { color: '#ccc', marginLeft: 15, fontSize: 12 },
  genreText: { color: '#ccc', marginLeft: 15, fontSize: 14, marginBottom: 5 },
  description: { color: '#aaa', margin: 15, fontSize: 13 },
  detailText: { color: '#ccc', marginHorizontal: 15, marginBottom: 3 },
  label: { fontWeight: 'bold', color: '#fff' },
  actions: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  actionText: { color: 'white', marginLeft: 5 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginTop: 20 },
});

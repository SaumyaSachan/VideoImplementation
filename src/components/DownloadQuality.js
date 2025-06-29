import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const DownloadQuality = ({ visible, onClose }) => {
  const [selected, setSelected] = useState('720p');

  const qualities = ['1080p', '720p', '480p', '144p'];

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.header}>Download Quality</Text>
          {qualities.map((quality) => (
            <TouchableOpacity key={quality} onPress={() => setSelected(quality)} style={styles.option}>
              <View style={[styles.radio, selected === quality && styles.selected]} />
              <Text style={styles.qualityText}>{quality === '1080p' ? 'Full HD' : quality}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.downloadBtn}>
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Not Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DownloadQuality;

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  modal: { backgroundColor: '#071b30', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  header: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  option: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  radio: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: '#fff', marginRight: 10 },
  selected: { backgroundColor: '#2b8eff' },
  qualityText: { color: 'white' },
  downloadBtn: { backgroundColor: '#2b8eff', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 15 },
  downloadText: { color: '#fff', fontWeight: 'bold' },
  cancelBtn: { padding: 12, alignItems: 'center', marginTop: 10 },
  cancelText: { color: '#2b8eff' },
});

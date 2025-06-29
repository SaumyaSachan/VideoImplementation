import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const notifications = [
  {
    id: '1',
    title: 'Guardians of The Galaxy',
    subtitle: 'New arrival',
    date: '12/07/2023',
    image: require('../../assets/Intro1.png'),
    isNew: true,
  },
  {
    id: '2',
    title: 'Dracula Untold',
    subtitle: 'New arrival',
    date: '12/07/2023',
    image: require('../../assets/Intro2.png'),
    isNew: true,
  },
  {
    id: '3',
    title: 'Subscription reminder!',
    subtitle: 'Due date is 15/07/2023',
    date: '12/07/2023',
    isRenew: true,
  },
  {
    id: '4',
    title: 'Mega Zoo',
    subtitle: 'New arrival',
    date: '12/07/2023',
    image: require('../../assets/Intro1.png'),
  },
];

const Notification = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.image && <Image source={item.image} style={styles.thumb} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      {item.isNew && <View style={styles.dot} />}
      {item.isRenew && (
        <Pressable style={styles.renewBtn}>
          <Text style={styles.renewText}>Renew Plan</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
        </Pressable>
        <Text style={styles.headerText}>Notification</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041524',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    gap: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#071b30',
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
  },
  thumb: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
  },
  date: {
    color: '#999',
    fontSize: 10,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'limegreen',
    borderRadius: 5,
  },
  renewBtn: {
    backgroundColor: '#2b8eff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
  },
  renewText: {
    color: 'white',
    fontSize: 12,
  },
});

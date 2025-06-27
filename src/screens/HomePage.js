import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

// import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';




const HomeScreen = () => {
  const flashData = [
    { id: '1', title: 'Squid Game', image: require('../../assets/Intro2.png') },
    { id: '2', title: 'Kabir Singh', image: require('../../assets/Intro2.png') },
  ];

  const stayHomeData = [
    { id: '3', image: require('../../assets/Intro1.png') },
    { id: '4', image: require('../../assets/Intro1.png') },
    { id: '5', image: require('../../assets/Intro1.png') },
  ];

  const renderCard = ({ item }) => (
    <Image source={item.image} style={styles.miniCard} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        {/* <View style={styles.header}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <View style={styles.headerIcons}>
            <Icon name="search" size={22} color="#00BFFF" style={styles.iconBox} />
            <Icon name="notifications" size={22} color="#00BFFF" style={styles.iconBox} />
            <Image source={require('../../assets/Intro1.png')} style={styles.avatar} />
          </View>
        </View> */}
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
        <FontAwesome name="search" size={22} color="#00BFFF" style={styles.iconBox} />
        <FontAwesome name="bell-o" size={22} color="#00BFFF" style={styles.iconBox} />
        <Image source={require('../../assets/Intro1.png')} style={styles.avatar} />
        </View>
        </View>


        {/* Featured Banner */}
        <Image source={require('../../assets/Intro1.png')} style={styles.bannerImage} />
        <Text style={styles.title}>Morbius</Text>
        <View style={styles.actionRow}>
          {/* <TouchableOpacity style={styles.moreDetails}>
            <Icon name="information-circle-outline" size={18} color="#fff" />
            <Text style={styles.moreText}> More details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.watchButton}>
            <Icon name="play" size={18} color="#fff" />
            <Text style={styles.watchText}> Watch Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreDetails}>
            <Icon name="add" size={18} color="#fff" />
            <Text style={styles.moreText}> Add to playlist</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.moreDetails}>
  <FontAwesome name="info" size={18} color="#fff" />
  <Text style={styles.moreText}> More details</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.watchButton}>
  <FontAwesome name="play" size={18} color="#fff" />
  <Text style={styles.watchText}> Watch Now</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.moreDetails}>
  <FontAwesome name="list" size={18} color="#fff" />
  <Text style={styles.moreText}> Add to playlist</Text>
</TouchableOpacity>

        </View>
        <Text style={styles.genre}>Action | Thriller | Suspense</Text>

        {/* Flash Channel */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Flash Channel</Text>
          <Text style={styles.sectionMore}>More</Text>
        </View>
        <FlatList
          horizontal
          data={flashData}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        /> */}

        {/* Stay at Home */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stay at Home</Text>
          <Text style={styles.sectionMore}>More</Text>
        </View>
        <FlatList
          horizontal
          data={stayHomeData}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Icon name="home" size={24} color="#00BFFF" />
        <Icon name="videocam" size={24} color="#fff" />
        <Icon name="happy" size={24} color="#fff" />
        <Icon name="tv" size={24} color="#fff" />
        <Icon name="menu" size={24} color="#fff" />
      </View> */}

     <View style={styles.bottomNav}>
  <FontAwesome name="home" size={24} color="#fff" />
  <FontAwesome name="video-camera" size={24} color="#fff" />
  <FontAwesome name="smile-o" size={24} color="#fff" />
  <FontAwesome name="tv" size={24} color="#fff" />
  <FontAwesome name="bars" size={24} color="#fff" />
</View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    backgroundColor: '#111',
    padding: 6,
    marginHorizontal: 4,
    borderRadius: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#111',
  },
  bannerImage: {
    width: '100%',
    height: 220,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    alignItems: 'center',
  },
  moreDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: '#fff',
    fontSize: 12,
  },
  watchButton: {
    backgroundColor: '#00BFFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  genre: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionMore: {
    color: '#00BFFF',
    fontSize: 12,
  },
  miniCard: {
    width: 120,
    height: 80,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  bottomNav: {
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#333',
  },
});

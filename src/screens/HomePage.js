// import { DrawerActions } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeCardList from '../components/HomeCardList';
import HomeHeader from '../components/HomeHeader';
import HomeBottom from '../components/HomeBottom';
import HomeBanner from '../components/HomeBanner';
import PremiumModal from '../components/PremiumModal';


const HomePage = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const openPremiumModal = () => setModalVisible(true);
  const closePremiumModal = () => setModalVisible(false);

  // const flashData = [
  //   { id: '1', title: 'Squid Game', image: require('../../assets/Intro2.png') },
  //   { id: '2', title: 'Kabir Singh', image: require('../../assets/Intro2.png') },
  // ];

  // const stayHomeData = [
  //   { id: '3', image: require('../../assets/Intro1.png') },
  //   { id: '4', image: require('../../assets/Intro1.png') },
  //   { id: '5', image: require('../../assets/Intro1.png') },
  // ];

  // const renderCard = ({ item }) => (
  //   <Image source={item.image} style={styles.miniCard} resizeMode="cover" />
  // );

  
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        
        <HomeHeader navigation={navigation} />


        {/* Featured Banner */}

        <HomeBanner navigation={navigation}/>
       
       

        {/* Flash Channel */}
       
        {/* Stay at Home */}
       

        <HomeCardList
          title="Flash Channel"
          items={[
            { image: require('../../assets/Intro2.png'),

              onPress: () => navigation.navigate('VideoDetailScreen', {
                videoData: {
                  title: 'Squid Game',
                  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
                }
              }),

             },
            { image: require('../../assets/Intro2.png'),
               onPress: openPremiumModal,
             },
            { image: require('../../assets/Intro2.png') },
          ]}
          // onImagePress={openPremiumModal}
        />

      <HomeCardList
        title="Stay at Home"
        items={[
          { image: require('../../assets/Intro1.png') },

          { image: require('../../assets/Intro1.png'),
             onPress: openPremiumModal,
           },
          { image: require('../../assets/Intro1.png') },
        ]}

        // onImagePress={openPremiumModal}
      />



      </ScrollView>

      {/* Bottom Navigation */}
      
  <TouchableOpacity
  onPress={() => navigation.navigate('DownloadedVideo')}
  style={styles.downloadButton}
>
  <Text style={styles.downloadButtonText}>Go to Downloads</Text>
</TouchableOpacity>
  <HomeBottom/>
  <PremiumModal visible={modalVisible} onClose={closePremiumModal} />

    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
   downloadButton: {
  backgroundColor: '#00BFFF',
  paddingVertical: 10,
  paddingHorizontal: 20,
  margin: 20,
  borderRadius: 8,
  alignItems: 'center',
},

downloadButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

});

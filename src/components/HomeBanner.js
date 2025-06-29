import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeBanner = ({navigation}) => {
  return (
   <>
    <Image source={require('../../assets/Intro1.png')} style={styles.bannerImage} />
    <Text style={styles.title}>Morbius</Text>
    <View style={styles.actionRow}>
             
   
    <TouchableOpacity style={styles.moreDetails}>
    <FontAwesome name="info" size={18} color="#fff" />
    <Text style={styles.moreText}> More details</Text>
    </TouchableOpacity>
   
    <TouchableOpacity style={styles.watchButton}>
    <FontAwesome name="play" size={18} color="#fff" />
    <Text style={styles.watchText}  onPress={()=>navigation.navigate('PlayVideo')}> Watch Now</Text>
    </TouchableOpacity>
   
    <TouchableOpacity style={styles.moreDetails}>
    <FontAwesome name="list" size={18} color="#fff" />
    <Text style={styles.moreText}> Add to playlist</Text>
    </TouchableOpacity>
   
    </View>
    <Text style={styles.genre}>Action | Thriller | Suspense</Text>
   </>
  )
}
export default HomeBanner;

const styles= StyleSheet.create({
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
})
// import React from 'react';
// import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';

// const { width } = Dimensions.get('window');

// const slides = [
//   { key: '1', title: 'Welcome', description: 'This is slide 1' },
//   { key: '2', title: 'Learn', description: 'This is slide 2' },
//   { key: '3', title: 'Get Started', description: 'This is slide 3' },
// ];

// const FirstScreen = () => {
//   return (
//     <FlatList
//       data={slides}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={item => item.key}
//       renderItem={({ item }) => (
//         <View style={styles.slide}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.description}>{item.description}</Text>
//         </View>
//       )}
//     />
//   );
// };

// export default FirstScreen;

// const styles = StyleSheet.create({
//   slide: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#120709',
//   },
//   title: {
//     fontSize: 24,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 16,
//     color: 'lightgray',
//     marginTop: 10,
//   },
// });


// FirstScreen.js
// import { View, Text, SafeAreaView, Dimensions, Image, StyleSheet ,Button,TouchableOpacity } from 'react-native'
// import React from 'react'
// import Carousel from 'react-native-reanimated-carousel';

// const { width,height } = Dimensions.get('window');

// const images = [
//   require('../../assets/Intro1.png'),
//   require('../../assets/Intro2.png'),
//   require('../../assets/Group8148.png'),
// ];
// function CarouselScreen({navigation}) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Carousel
//         loop
//         autoPlay
//         data={images}
//         scrollAnimationDuration={2000}
//         width={width}
//         height={600}
//         renderItem={({ item }) => (
//           <Image source={item} style={styles.image} />
//         )}
//       />

//       <TouchableOpacity onPress={()=>navigation.navigate('BottomTab')}> 
//         <Text>Get Entertainment</Text>
//       </TouchableOpacity>
//       <View>
//       <Button title="Get Entertained" />
//       </View>
//     </SafeAreaView>
//   )
// }

// export default CarouselScreen;

// const styles = StyleSheet.create({

//     container: {
//     flex: 1,
//     backgroundColor: 'black', // Optional: fallback color
//   },
//   image: {
//     width: width,
//     height: height,
//     resizeMode: 'cover',
//     borderRadius: 8,
//   },
// });

import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../assets/Intro1.png'),
  require('../../assets/Intro2.png'),
  require('../../assets/Group8148.png'),
];

function CarouselScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        loop
        autoPlay
        data={images}
        scrollAnimationDuration={2000}
        width={width}
        height={height * 0.75} 
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('BottomTab')}
        >
          <Text style={styles.buttonText}>Get Entertainment</Text>
        </TouchableOpacity>

        <Button title="Skip" onPress={() => navigation.navigate('BottomTab')} />
      </View>
    </SafeAreaView>
  );
}

export default CarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: width,
    height: height * 0.75,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  buttonTouchable: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

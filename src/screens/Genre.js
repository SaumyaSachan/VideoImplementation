
// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

// export default function GenreScreen() {
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const genres = [
//     { name: 'Action', image: require('../../assets/Intro1.png') },
//     { name: 'Romance', image: require('../../assets/Intro1.png') },
//     { name: 'Comedy', image: require('../../assets/Intro1.png') },
//      { name: 'Comedy', image: require('../../assets/Intro1.png') },

        
//   ];

//   const handleCheckboxChange = (genreName, isChecked) => {
//     if (isChecked) {
//       setSelectedGenres((prev) => [...prev, genreName]);
//     } else {
//       setSelectedGenres((prev) => prev.filter((name) => name !== genreName));
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Choose your favorite genres</Text>

//       {genres.map((genre, index) => (
//         <View key={index} style={styles.card}>
//           <Image source={genre.image} style={styles.image} />
//           <Text style={styles.label}>{genre.name}</Text>
//           <BouncyCheckbox
//             size={25}
//             fillColor="skyblue"
//             unfillColor="#fff"
//             iconStyle={{ borderColor: 'skyblue' }}
//             text=""
//             onPress={(isChecked) => handleCheckboxChange(genre.name, isChecked)}
//           />
//         </View>
//       ))}

//       <TouchableOpacity
//         style={styles.confirmButton}
//         onPress={() => console.log('Selected genres:', selectedGenres)}
//       >
//         <Text style={styles.confirmText}>Confirm</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//           <Text style={styles.skipText} onPress={()=>navigation.navigate('Camera')}>Take IMAGE</Text>
//          </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#000',
//     flexGrow: 1,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   card: {
//     alignItems: 'center',
//     marginBottom: 20,
//     backgroundColor: '#111',
//     borderRadius: 8,
//     padding: 10,
//     width: '80%',
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 8,
//   },
//   label: {
//     color: '#fff',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   confirmButton: {
//     backgroundColor: 'skyblue',
//     padding: 15,
//     marginTop: 20,
//     borderRadius: 10,
//   },
//   confirmText: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
// });
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function GenreScreen({ navigation }) {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [
    { name: 'Action', image: require('../../assets/Intro1.png') },
    { name: 'Romance', image: require('../../assets/Intro1.png') },
    { name: 'Comedy', image: require('../../assets/Intro1.png') },
    { name: 'Drama', image: require('../../assets/Intro1.png') },
    { name: 'Horror', image: require('../../assets/Intro1.png') },
    { name: 'Sci-Fi', image: require('../../assets/Intro1.png') },
  ];

  const handleCheckboxChange = (genreName, isChecked) => {
    if (isChecked) {
      setSelectedGenres((prev) => [...prev, genreName]);
    } else {
      setSelectedGenres((prev) => prev.filter((name) => name !== genreName));
    }
  };

  const renderGenreItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.name}</Text>
      <BouncyCheckbox
        size={20}
        fillColor="skyblue"
        unfillColor="#fff"
        iconStyle={{ borderColor: 'skyblue' }}
        text=""
        onPress={(isChecked) => handleCheckboxChange(item.name, isChecked)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your favorite genres</Text>

      <FlatList
        data={genres}
        renderItem={renderGenreItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.skipText}>Take IMAGE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#111',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    width: '30%',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    marginVertical: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: 'skyblue',
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#000',
    fontWeight: 'bold',
  },
  skipText: {
    color: 'skyblue',
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

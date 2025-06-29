import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const dummySuggestions = [
  'Gossip girl',
  'Got',
  'Raised by wolves',
  'We bare bears',
  'Superman',
];

const Search = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleSelect = (item) => {
    // TODO: Handle selection logic
    console.log('Selected:', item);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Search for show, movie, genre ..."
          placeholderTextColor="#ccc"
          value={query}
          onChangeText={setQuery}
          
        />
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dummySuggestions.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem} onPress={() => handleSelect(item)}>
            <Text style={styles.resultText}>{item}</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041524',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#071b30',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
  },
  cancel: {
    color: '#4ac4fa',
    marginLeft: 10,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  resultText: {
    color: 'white',
    fontSize: 16,
  },
  arrow: {
    color: '#999',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#1e2e40',
  },
});

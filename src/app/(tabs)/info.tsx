import Header from '@/src/componets/Header';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Info = () => {
  // Dummy data for FlatList
  const facts = [
    { id: '1', fact: 'The Eiffel Tower can be 15 cm taller during the summer.' },
    { id: '2', fact: 'Bananas are berries, but strawberries are not.' },
    { id: '3', fact: 'Octopuses have three hearts.' },
    { id: '4', fact: 'The Eiffel Tower can be 15 cm taller during the summer.' },
    { id: '5', fact: 'Bananas are berries, but strawberries are not.' },
    { id: '6', fact: 'Octopuses have three hearts.' },
    { id: '7', fact: 'The Eiffel Tower can be 15 cm taller during the summer.' },
    { id: '8', fact: 'Bananas are berries, but strawberries are not.' },
    { id: '9', fact: 'Octopuses have three hearts.' },
    { id: '10', fact: 'The Eiffel Tower can be 15 cm taller during the summer.' },
    { id: '11', fact: 'Bananas are berries, but strawberries are not.' },
    { id: '12', fact: 'Octopuses have three hearts.' },
  ];

  return (
    <View>
      <Header title="Info Page" />
      <View style={styles.MainConatiner}>
        <FlatList
          data={facts}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.fact}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  MainConatiner:{
    padding:20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

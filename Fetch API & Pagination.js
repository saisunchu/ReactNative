import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, setisLoading] = useState(false);

  const FetchAPI = async () => {
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}`,
      );
      let responseJson = await response.json();
      let products = responseJson.products;
      return products;
    } catch (error) {
      console.error(error);
    }
  };

  const DataFetchAPI = async () => {
    setisLoading(true);
    const data = await FetchAPI();
    if (data.length > 0) {
      setDataSource(data);
      setItemsPerPage(itemsPerPage+10);
    }
    setisLoading(false);
  };

  const LoadingIndicator = () =>
  {
    return(
      <View style={styles.LoadingIndicator}>
        <ActivityIndicator size="small" />
        <Text>Loading...</Text> 
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>ID: {item.id}</Text>
        <Text style={styles.lightText}>Title: {item.title}</Text>
        <Text style={styles.lightText}>Price: {item.price}</Text>
        <Text style={styles.lightText}>Brand: {item.brand}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to World of APIs</Text>

      <TouchableOpacity onPress={DataFetchAPI} style={styles.TouchOps}>
        <Text style={{ color: 'white' }}>FetchAPI</Text>
      </TouchableOpacity>

      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={DataFetchAPI} // Triggered when the user reaches the end of the list
        onEndReachedThreshold={0.1} // Adjust this value to control the triggering point
        ListFooterComponent={ isLoading && <LoadingIndicator /> }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    alignSelf: 'center',
  },
  lightText: {
    fontSize: 15,
    // marginBottom : 5,
  },
  TouchOps: {
    borderWidth: 1,
    padding:8,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  list: {
    marginLeft : 0,
    borderWidth: 1,
    marginTop: 3,
    padding: 2,
  },
  LoadingIndicator: {
    alignItems: 'center',
  },
});

export default App;

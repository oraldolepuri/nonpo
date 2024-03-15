import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  IconButton,
  ScrollView,

} from 'react-native';
import { Card, Button, Dimensions } from 'react-native-paper';
const DATA = [
  {
    id: '1234678',
    name: 'John Doe',
    email: "johndoe@gmail.com",
    available: 'current',
  },
  {
    id: '87654321',
    name: 'Michel Kolorado',
    email: "michelkolorado@gmail.com",
    available: 'current',
  },
  {
    id: '54321678',
    name: 'Goeter Kristian',
    email: "goeterkristian@gmail.com",
    available: 'current',
  }
  ,
  {
    id: '67854321',
    name: 'Goeter Kolno',
    email: "goeterkolono@gmail.com",
    available: 'current',
  },
  {
    id: '11223344',
    name: 'Kulian Kristian',
    email: "kuliankristian@gmail.com",
    available: 'current',
  }
  ,
  {
    id: '11223944',
    name: 'Kulin Kristian',
    email: "kuliankrisuian@gmail.com",
    available: 'current',
  }
  ,
  {
    id: '11223644',
    name: 'Kulian Krktian',
    email: "kuliankristiai@gmail.com",
    available: 'current',
  }
  ,
  {
    id: '11523344',
    name: 'Kulian Krittian',
    email: "kuliankristian@gmail.com",
    available: 'current',
  }
];

const renderCardItem  = ({item}) => (
  <View style={styles.box}>
  <Card style={styles.shadow}>
  <Text style={styles.id}>{item.id}</Text>
  <View style={styles.content}>
  <Card.Content style={styles.info}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.title}>{item.email}</Text>
</Card.Content>
<Card.Actions>
<Button style={styles.button}>{item.available}</Button>
    </Card.Actions>
    </View>
  </Card>
  </View>
);

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <FlatList
        data={DATA}
        renderItem={renderCardItem}
        keyExtractor={item => item.id}
      /></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'

  },
  box: {
    width: 370,
    height: 138,
    top: 210,
    borderRadius: 15,

  },
  id: {
    fontSize: 14,
  },
  content:{
   flexDirection: 'row'
  },
 shadow:{

  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
 }
});

export default Cart;
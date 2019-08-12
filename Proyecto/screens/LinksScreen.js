import React from 'react';
import { ScrollView, StyleSheet,View,Text,Picker } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';

export default function LinksScreen() {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  const { search } = this.state;
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       <View style={styles.vista}>
          

          <Text style={styles.text}>Mis Peliculas</Text>
          <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
          

          
        </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Mi titulo',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ffff00',
  },
  vista:{
    alignItems: "center",
    backgroundColor: '#ffff',
    paddingTop:6,
    },
  texto:{
    alignItems: "center",
    color: '#fefefe',
  }
});

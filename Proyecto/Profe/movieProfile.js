import React, { Component } from 'react'

import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image,ImageBackground } from 'react-native'



//https://stackoverflow.com/questions/42847263/how-to-render-a-loader-until-data-is-fetched-in-react-native
export default class MovieProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: true,
       /*   movie:
            {   
                "id": this.props.movie,
                 "title": "Avengers: Endgame",
                "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
                "popularity": 612.518,
                "homepage": "https://www.marvel.com/movies/avengers-endgame",
                "vote_average": 8.4,
                "poster_path": URLIMG + "/qJawKUQcIBha507UahUlX0keOT7.jpg"
            }
          */
        }
      }
    render() {
      const URLIMG = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

        return (
          <View>
    <ScrollView style={styles.scroll}>
    <Image style={{position:'relative', width: '100%', height: 200, resizeMode: 'contain', justifyContent: 'center', }}
                        source={{ uri: URLIMG + this.props.movie.poster_path }}
                    />
                     <Text style={styles.titulo}>{this.props.movie.title}</Text>
    <Text style={styles.overview}> {this.props.movie.overview} </Text>
    <Text style={styles.overview}> {'Estreno: ' + this.props.movie.release_date} </Text>
    <Text style={styles.minimos}>{'Popularidad:' + this.props.movie.popularity} </Text>
    <Text style={styles.minimos}> {'Sitio web: '+ this.props.movie.homepage} </Text>
    <Text style={styles.minimos}> {'Valoración: ' + this.props.movie.vote_average} </Text>
    
    
    </ScrollView>
    
    </View>
        )
        }
      }


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll:{
      backgroundColor: 'rgba(52, 52, 52, 0.7)',
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
      },
      titulo: {
        flex: 1,
        padding: 20,
        color: 'orange',
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      overview: {
        flex: 1,
        fontSize: 19,
        padding:20,
        color:'white',
        fontWeight:'bold',
    },
    minimos: {
        flex: 1,
        fontSize: 19,
        textAlign: 'left',
        color:'white',
        padding:20,
        fontWeight:'bold',
  },
  
})
const resizeMode = 'center';

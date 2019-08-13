import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import CommonDataManager from '../Profe/CommonDataManager';
import MoviesDataManager from '../Profe/MoviesDataManager';

import List from '../Profe/List'

export default class SearchMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            updated: true,
            filtro: ''
        }
        MoviesDataManager.getInstance().getPopularMovies(this.updatePeliculas)
    }
    componentWillUnmount() {
        CommonDataManager.getInstance().refreshData()
    }
    onPressBuscarPelicula(filtro) {
        if (filtro == "" || filtro == undefined || filtro == null) { return }
        // console.log("Entre a la funcion con: \n" + filtro)
        MoviesDataManager.getInstance().buscarPelicula(filtro, this.updatePeliculas)
    }
    updatePeliculas = (responseJson) => {
        CommonDataManager.getInstance().setMoviesJSON(responseJson);
        this.setState({ updated: !this.state.updated });
        return responseJson.movies;
    }

    

    render() {
        const navigator = this.props.navigation;


        return (
            <ImageBackground style={{ alignItems: "center", justifyContent: 'center' }}
                source={{ uri: 'https://iphoneswallpapers.com/wp-content/uploads/2018/11/Cartoons-watching-Movie-iPhone-Wallpaper-469x832.jpg' }}
                style={styles.backgroundImage}>
                <Text> </Text>
                <Text> </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop: 5,
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginLeft: '10%',
                }}
                    placeholder=' Ingrese la pelicula a buscar...'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        filtro: text
                                    };
                                }
                            )
                        }
                    }
                ></TextInput>

                <TouchableOpacity style={styles.touchable}
                    onPress={() => {
                        // console.log(this.state.filtro)
                        this.onPressBuscarPelicula(this.state.filtro)
                    }
                    }>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                    <Image
                        style={{ padding: 30, width: '100%', height: 50, resizeMode: 'stretch' }}
                        source={{ uri: 'http://www.clker.com/cliparts/F/2/D/B/l/f/search-button-hi.png' }}
                    />

                </TouchableOpacity>
                <View>
                    <List navigator={navigator} />
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#add8e6',
        justifyContent: 'center',

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    touchable: {
        marginLeft: '10%',
        width: '80%',

    }
})
const resizeMode = 'center';

export default class MoviesDataManager {

    static myInstance = null;

    _CommentsJSON = "";


    /**
     * @returns {MoviesDataManager}
     */
    static getInstance() {
        if (MoviesDataManager.myInstance == null) {
            MoviesDataManager.myInstance = new MoviesDataManager();
        }
        return this.myInstance;
    }
    getMovie(id, callback) {
        return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=49a6206e72d73e13c8690652f47703e2&api_key=49a6206e72d73e13c8690652f47703e2')
            .then((response) => response.json())
            .then((responseJson) => callback(responseJson))
            .catch((error) => {
                console.error(error);
            });
    }
    buscarPelicula(filtro, callback) {
        return fetch('https://api.themoviedb.org/3/search/movie?api_key=49a6206e72d73e13c8690652f47703e2&query=' + filtro + '&include_adult=false')
            .then((response) => response.json())
            .then((responseJson) => callback(responseJson))
            .catch((error) => {
                console.error(error);
            });
    }
    getPopularMovies(callback) {
        return fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=49a6206e72d73e13c8690652f47703e2')
            .then((response) => response.json())
            .then((responseJson) => callback(responseJson))
            .catch((error) => {
                console.error(error);
            });
    }
}
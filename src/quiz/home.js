import React from 'react';
import axios from 'axios';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            daftarMovie:[],
            edited:0
        }
    }
    componentDidMount(){
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res=>{
                const movie = res.data;
                this.setState({daftarMovie: movie});
                this.sortByRating();
            });
    }
    sortByRating(){
        const {daftarMovie} = this.state
        let newDaftarMovie = daftarMovie
        newDaftarMovie=daftarMovie.sort((a,b)=>parseInt(b.rating)-parseInt(a.rating))
        this.setState({
            daftarMovie: newDaftarMovie,
            edited:1
        })
    }
    render(){
        return(
            <div>
                <section>
                <h1>Daftar Film Film Terbaik</h1>
                <div id="article-list">
                { this.state.edited===1 && this.state.daftarMovie.map((movie) => {
                    return(
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                            <div className="flex-row">
                                <div className="movie-image">
                                    <img src={movie.image_url} alt="movie shots/poster" />
                                </div>
                                <div className="movie-details">
                                    <h3>Rating  : {movie.rating}</h3>
                                    <h3>Durasi  : {movie.duration}</h3>
                                    <h3>Genre   : {movie.genre}</h3>
                                </div>
                            </div>
                            <div className="movie-description">
                                <p><b>Description: </b>{movie.description}</p>
                            </div>
                            <hr />
                    </div>
                    )})
                }
                </div>
                </section>
                <footer>
                    <h5>copyright © 2020 by Sanbercode</h5>
                </footer>
            </div>
        );
    }
}
export default Home;
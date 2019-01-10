import React, { Component } from 'react';

class UpComingMovie extends Component {
  state = {
    films: null,
  }
  
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497')
      .then( results => {
        return results.json();
      }).then(data => {
        this.setState({
          films: data.results
        })

      })
  }

  render() {
    return (
      this.state.films ?
      this.state.films.map(movie => {
          return(
            <div className="movies" key={movie.id} >
              <h1 className="titleMovies" >{movie.title}</h1>
              <img className="imgMovie" id={movie.id} src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt={"Poster of" + movie.title} onClick={this.handleOnClick}></img>
        </div>
        )
      }) :
      <span>Loading...</span>
    )
  }
}

export default UpComingMovie;
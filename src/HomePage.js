import React, { Component } from 'react';

class HomePage extends Component {
  state = {
    films: null,
    filmsSelectedId: []
  }


  handleOnClick = (e) => {
    this.state.films.filter(movie => {
      if (e.target.id == movie.id) {
        let filmsSelectedIds = this.state.filmsSelectedId;
        if(filmsSelectedIds.indexOf(movie.id) != -1){
          filmsSelectedIds.splice(filmsSelectedIds.indexOf(movie.id), 1)
        }
        else {
          filmsSelectedIds.push(movie.id);
        }
        this.setState({filmsSelectedId : filmsSelectedIds });
        console.log(this.state.filmsSelectedId)

        return null;
      }
    });
  }
  
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497')
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
/* const HomePage = () => (
  <AuthContext>
    {({ signOut }) => (
      <div>
        <header>
          Films
        </header>
        <div className="content">

        </div>
      </div>
    )}
  </AuthContext>
);*/

export default HomePage;
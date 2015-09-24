var Forms = React.createClass({
  getInitialState: function() {
    return {
      message: 'Find number of times a word is said in a movie',
      movie: '',
      runtime: '',
      word: '',
      wordcount: '',
      perMinueAverage: ''
    };
  },

  updateMovie: function(event) {
    if (event.target.value.length < 1) {
      this.setState({message: 'Find number of times a word is said in a movie'})
    } else {
      this.setState({message: event.target.value})
    }
  },

  render: function() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 inputs">
            <h1 className="text-center headtext">{this.state.message}</h1>
            <input type="text" className="form-control element" id="movie" placeholder="Type any movie name here..." onChange={this.updateMovie}/>
            <input type="text" className="form-control element" id="word"  placeholder="Type the word here..." onChange={this.updateWord}/>
            <button type="button" className="btn btn-md btn-info element" id="buton">Go!</button>
            </div>
        </div>
      </div>
    );
  }
});

React.render(
  <Forms />,
  document.getElementById('forms')
);


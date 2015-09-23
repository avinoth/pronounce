var Forms = React.createClass({
  getInitialState: function() {
    return {
      movie: '',
      runtime: '',
      word: '',
      wordcount: '',
      perMinueAverage: ''
    };
  },
  render: function() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 inputs">
            <h1 className="text-center headtext">Find number of times a word is said in a movie</h1>
            <input type="text" className="form-control element" id="movie" placeholder="Type any movie name here..."/>
            <input type="text" className="form-control element" id="word"  placeholder="Type the word here..."/>
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


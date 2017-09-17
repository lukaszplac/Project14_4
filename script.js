var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img_url: 'http://piq.codeus.net/static/media/userpics/piq_16327_400x400.png'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img_url: 'https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/343938_419/buty-dla-niemowlat-dynamo-free.jpg'
  },
  {
  	id: 3,
    title: 'The Dog',
    desc: 'Film o psie',
    img_url: 'http://piq.codeus.net/static/media/userpics/piq_16327_400x400.png'
  },
  {
  	id: 4,
    title: 'The Cat',
    desc: 'Film o kocie',
    img_url: 'https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/343938_419/buty-dla-niemowlat-dynamo-free.jpg'
  }
];


var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('h2', {}, this.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc);
	}
});

var MovieImage = React.createClass({
	propTypes: {
		img_url: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('img', {src: this.props.img_url},);
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function(){
		return React.createElement('li', {key: this.props.movie.id}, 
      		   React.createElement(MovieTitle, {title: this.props.movie.title}, ),
      		   React.createElement(MovieDescription, {desc: this.props.movie.desc}, ),
      		   React.createElement(MovieImage, {img_url: this.props.movie.img_url}, )
    	);
	}
});

var MoviesList = React.createClass({
	propTypes: {
		list: React.PropTypes.array.isRequired
	},
	render: function() {
		var elements = this.props.list.map(function(movie, index) {
			return React.createElement(Movie, {movie: movie, key: index}, );
		});
		return React.createElement('div', {},
    		   React.createElement('h1', {}, 'Lista filmów'),
    		   React.createElement('ul', {}, elements)
  		);
	}
});

var element = React.createElement(MoviesList, {list: movies});
ReactDOM.render(element, document.getElementById('app'));
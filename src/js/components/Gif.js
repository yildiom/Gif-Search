import React from 'react';
import axios from 'axios';
import Loader from "./Loader";

class Gif extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      gifUrl: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.tenor.com/v1/gifs?ids=${this.props.match.params.id}&key=${
          process.env.APIKEY
        }`
      )
      .then(response => {
        this.setState({
          gifUrl: response.data.results[0].media[0].gif.url,
        });
      });
  }

  render() {
    const { gifUrl } = this.state;
    return (
      <div className="single-gif">
        <img
          style={{
            width: '200px',
            height: '200px',
            border: '1px solid #2F94E7',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
          className="img"
          alt="gif"
          src={gifUrl}
        />
      </div>
    );
  }
}

export default Gif;

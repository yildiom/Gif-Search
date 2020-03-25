import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../bootstrap-components/Input';
import GifGrid from '../bootstrap-components/GifGrid';

const Home = ({ results }) => {
  if (results.length > 1) {
    return (
      <div>
        <Input />
        <GifGrid />
      </div>
    );
  }
  return <Input />;
};

const mapStateToProps = ({ results }) => ({ results });

Home.propTypes = {
  results: PropTypes.array,
};

export default connect(mapStateToProps)(Home);

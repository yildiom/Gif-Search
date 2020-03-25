import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likeGif } from '../actions/LikeActions';

function Heart({ likeGif }) {
  return (
    <i
      className="far fa-heart fa-2x"
      onClick={likeGif}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      style={{
        color: '#2F94E7',
        position: 'absolute',
        cursor: 'pointer',
        left: '150px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        border: '2px solid #2F94E7',
        borderRadius: '10px',
        padding: '3px',
        marginTop: '5px',
      }}
    />
  );
}

const mapStateToProps = ({ results, likeInfo }) => ({ results, likeInfo });

const mapDispatchToProps = dispatch => ({
  likeGif: e => {
    e.persist();
    dispatch(
      likeGif(
        e.target.previousElementSibling.lastElementChild.attributes.src
          .nodeValue,
        e.target.parentElement.id
      )
    );
  },
});

Heart.propTypes = {
  likeGif: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heart);

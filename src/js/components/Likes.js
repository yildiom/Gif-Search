import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Likes = ({ likeInfo }) => (
  <Container>
    <Row>
      {likeInfo.map(el => (
        <Col key={el.gifID}>
          <div
            className="gifCard"
            id={el.gifID}
            style={{ position: 'relative' }}
          >
            <Link to={`/gif/${el.gifID}`}>
              <img
                className="img"
                alt="gif"
                id={el.gifID}
                src={el.gifURL}
                key={el.gifID}
              />
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

const mapStateToProps = ({ likeInfo }) => ({ likeInfo });

Likes.propTypes = {
  likeInfo: PropTypes.array,
};

export default connect(mapStateToProps)(Likes);

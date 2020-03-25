import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heart from '../components/Heart';
import Loader from '../components/Loader';

const GifGrid = ({ results }) =>
  results.length > 1 ? (
    <Container>
      <Row>
        {results.map(el => (
          <Col key={el.id}>
            <div
              className="gifCard"
              id={el.id}
              style={{ position: 'relative' }}
            >
              <Link to={`/gif/${el.id}`}>
                <img
                  className="img"
                  alt="gif"
                  id={el.id}
                  src={el.media[0].gif.url}
                />
              </Link>
              <Heart />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <Loader />
  );

const mapStateToProps = ({ results }) => ({ results });

GifGrid.propTypes = {
  results: PropTypes.array,
};

export default connect(mapStateToProps)(GifGrid);

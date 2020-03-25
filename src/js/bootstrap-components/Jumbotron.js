import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background-color: #2f94e7;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .jumbotron-fluid {
    padding: 10px 0 0 0;
    height: 165px;
  }
  .jumbo-image {
    background-position-x: 80px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="contain">
        <div className="jumbo-text">
          <h1
            style={{
              paddingTop: `40px`,
            }}
          >
            More than 300M people use Tenor every month to communicate with an
            animated GIF that expresses their exact thoughts or feelings.
          </h1>
        </div>
        <div className="jumbo-image" />
      </div>
    </Jumbo>
  </Styles>
);

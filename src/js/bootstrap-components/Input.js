import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setInput } from '../actions/SearchFormActions';
import { getGifs } from '../actions/GifActions';

const Styles = styled.div`
  .mb-3 {
    font-family: 'Montserrat', sans-serif;
    width: 98%;
  }
`;

const Input = ({ search, setInput, getGifs }) => (
  <Styles>
    <div>
      <form action="" onSubmit={getGifs}>
        <InputGroup
          className="mb-3"
          style={{
            border: '3px solid #2F94E7',
            borderRadius: '10px',
          }}
        >
          <FormControl
            placeholder="Search your GIFs"
            aria-label="Search your GIFs"
            aria-describedby="basic-addon2"
            onChange={setInput}
            value={search}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    </div>
  </Styles>
);

const mapStateToProps = ({ search, results }) => ({
  search,
  results,
});
const mapDispatchToProps = dispatch => ({
  setInput: e => {
    console.log(e);
    dispatch(setInput(e.target.value));
  },
  getGifs: e => {
    e.preventDefault();
    dispatch(getGifs());
  },
});

Input.propTypes = {
  search: PropTypes.string,
  setInput: PropTypes.func,
  getGifs: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

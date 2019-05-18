import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './inputArea.module.css';

export default class InputArea extends Component {
  state = {
    value: '',
  };

  onHandleChange = e => {
    this.setState({ value: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={style.searchForm} onSubmit={this.onHandleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={value}
          onChange={this.onHandleChange}
          placeholder="Search images..."
          name="searchString"
        />
      </form>
    );
  }
}

InputArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

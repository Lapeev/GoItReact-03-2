import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import InputArea from './InputArea/inputArea';
import Gallery from './Gallery/gallery';
import Modal from './Modal/modal';
import ErrorNotification from './ErrorNotification/errorNotification';
import * as services from '../services/pixabay-api';
import style from './mainApp.module.css';

export default class App extends Component {
  state = {
    isOpen: false,
    fotoArr: [],
    pageNumber: 1,
    selectedFotoId: null,
    askString: '',
    error: null,
    isLoading: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.fotoArr !== this.state.fotoArr) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  openModal = id => {
    this.setState({
      isOpen: true,
      selectedFotoId: id,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      selectedFotoId: null,
    });
  };

  findImgUrl = selectedFotoId =>
    this.state.fotoArr.find(foto => foto.id === selectedFotoId).largeImageURL;

  onSubmit = name => {
    this.setState({ askString: name, pageNumber: 1, fotoArr: [] }, () => {
      this.loadNewFotos();
    });
  };

  loadNewFotos = () => {
    this.setState({ isLoading: true });
    services
      .fetchFotos(this.state.askString, this.state.pageNumber)
      .then(({ data }) =>
        this.setState(prevState => ({
          fotoArr: prevState.fotoArr.concat(data.hits),
        })),
      )
      .then(
        this.setState(prevState => ({
          pageNumber: prevState.pageNumber + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { isOpen, fotoArr, selectedFotoId, isLoading, error } = this.state;
    return (
      <div className={style.mainApp}>
        <InputArea onSubmit={this.onSubmit} />
        {isLoading && (
          <div className={style.spinner}>
            <Spinner name="circle" />
          </div>
        )}
        {fotoArr.length > 0 && (
          <Gallery fotoArr={fotoArr} openModal={this.openModal} />
        )}
        {fotoArr.length > 0 && (
          <button
            className={style.loadMore}
            type="button"
            onClick={this.loadNewFotos}
          >
            Load more
          </button>
        )}
        {error && <ErrorNotification text={error.message} />}
        {isOpen && (
          <Modal
            onClose={this.closeModal}
            url={this.findImgUrl(selectedFotoId)}
          />
        )}
      </div>
    );
  }
}

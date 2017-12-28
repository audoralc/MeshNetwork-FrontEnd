import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import './style.css';

const OptionModal = props => 
  <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Make a space or join one?"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Error</h3>
    <button className="modal__button" onClick={() => props.history.push('/auth')}>Create a Space</button>
    <button className="modal__button" onClick={() => props.history.push('/')}>Join a Space</button>
    <button className="modal__button" onClick={props.closeModal}>Close</button>
  </Modal>
export default OptionModal;
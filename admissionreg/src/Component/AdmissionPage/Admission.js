import React from 'react';
import NewRegForm from './NewRegForm';
import './Table.css'
class Admission extends React.Component {
    state = {showModal: false}
    handleShowMessageClick = () => this.setState({showModal: true})
    handleCloseModal = () => this.setState({showModal: false})
    render() {
      return (
        <div
          style={{
            height: '100%',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 400,
              position: 'relative',
            }}
          >
            <h1 className="head">ADMISSION DETAILS</h1>
            <button className="click" onClick={this.handleShowMessageClick}>
            REGISTER
            </button>
            {this.state.showModal ? (<NewRegForm onClose={this.handleCloseModal}></NewRegForm>) : null}
          </div>
        </div>
      )
    }
  }
export default Admission;
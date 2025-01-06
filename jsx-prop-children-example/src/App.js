import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import './App.css';
import { useState } from 'react';

function ExampleModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      { props.children ? (
        <Modal.Dialog>
          {props.children}
        </Modal.Dialog>
      ) : (
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={props.toggleModal}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
      )}
      
    </div>
  );
}

function ExampleChild(props){
  return (
    <div style={{background: 'red'}}>
      <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={props.toggleRedModal}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
    </div>
  )
}

const AButton = ({children, backgroundColor, clicked}) => {
  return <button style={{backgroundColor}} onClick={clicked}>{children}</button>
}

const DeleteButton = (props) => {
  return <AButton backgroundColor='red' clicked={props.toggleAlert}>Delete</AButton>
}

const Alert = ({children}) => {
  return (
    <>
      <div className='Overlay' />
      <div className='Alert'>{children}</div>
    </>
  )
}

function App() {
  document.title = 'JSX Prop Children Example';
  const [showModal, setShowModal] = useState(false);
  const [showRedModal, setShowRedModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleModal = ()=>{
    setShowRedModal(false);
    setShowModal(!showModal);
  }
  const toggleRedModal = ()=>{
    setShowModal(false);
    setShowRedModal(!showRedModal);
  }

  const toggleAlert = () => {
    setShowModal(false);
    setShowRedModal(false);
    setShowAlert(!showAlert);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX Prop Children Example</h1>
        <Card style={{ width: '18rem' }}>
      {  showModal && (<ExampleModal toggleModal={toggleModal} />) }
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Modal Open Example</Card.Title>
            <Card.Text>
              press the button  below to Open the modal
            </Card.Text>
            <Button variant="primary" onClick={toggleModal}>Toggle Modal</Button>
            <Button variant="primary" onClick={toggleRedModal}>Toggle Red Modal</Button>
            <Button variant="primary" onClick={toggleAlert}>Toggle Alert</Button>
          </Card.Body>
          {  showRedModal && (<ExampleModal children={<ExampleChild toggleRedModal={toggleRedModal}/>} toggleModal={toggleRedModal} />) }
        </Card>
      </header>
      <main>
        {showAlert && (
          <Alert>
            <h4>Delete Account</h4>
            <p>
              Are you sure you want to proceed? you will miss all your delicious reciepes!
            </p>
            <DeleteButton toggleAlert={toggleAlert}/>
          </Alert>
          )}
      </main>
    </div>
  );
}

export default App;

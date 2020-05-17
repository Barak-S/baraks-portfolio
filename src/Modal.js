import React from 'react'
import { Modal, Button } from 'react-bootstrap';

import './App.css';

export default class ProjectModal extends React.Component{

    render(){
        return(
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Project title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Project description goes here.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>this.props.closeModal()}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
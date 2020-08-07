import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default class AddForm extends Component{
    constructor(props){
        super(props);
        this.state={id:'', title:'',description:'',dateAdded:''};

        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){
        const {onChangeValue}=this.props
        return(
            <Container className="add-form" style={{width:"500px"}}>
                <h2 className="text-center">Add new announcement</h2>
                <Form onSubmit={onChangeValue}>
                    <Form.Group controlId="formBasicId">
                        <Form.Control type="text" name="id" value="0" hidden/>
                    </Form.Group>

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name="title" required onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" name="description" required onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDateAdded">
                        <Form.Label>Date added</Form.Label>
                        <Form.Control type="date" placeholder="Enter date added" name="dateAdded" required onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Button type="submit" variant="outline-dark" style={{padding: ".375rem 13.75rem"}}>Add</Button>
                </Form>
                
            </Container>
        );
    }
}
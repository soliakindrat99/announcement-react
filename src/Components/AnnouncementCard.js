import React, { Component } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

export default class AnouncementCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.handleEditing=this.handleEditing.bind(this);
  }
  handleEditing(event){
    event.preventDefault();
    this.setState({editing:!this.state.editing});
  }
    render(){
      const {onDelete, onEdit}=this.props
      
        return(
            <Container style={{padding: "15px"}}>
               <Card>
                <Form onSubmit={this.handleEditing}>
                    <Card.Body>
                    
                      <Form.Control type="text" name="id" value={this.props.id} hidden/>

                      {this.state.editing ?  (<Form.Control type="text" name="title" defaultValue={this.props.title} required onChange={onEdit}/>) :
                      (<Card.Title>{this.props.title}</Card.Title>)}
                      
                      {this.state.editing ? (<Form.Control type="text" name="description" defaultValue={this.props.description} required onChange={onEdit}/>) :
                      (<Card.Text>{this.props.description}</Card.Text>)}
                        
                    </Card.Body>

                    <Card.Footer className="text-muted">
                    {this.state.editing ? (<Form.Control type="date" name="dateAdded" defaultValue={this.props.dateAdded} required onChange={onEdit}/>):
                    (<p>{this.props.dateAdded}</p>)}
                    </Card.Footer>
                    

                      {this.state.editing ? (<Button style={{width:"50%"}} type="submit" variant="outline-dark">Save</Button>) :
                      (<Button onClick={this.handleEditing} style={{width:"50%"}} variant="outline-dark">Edit</Button>)}
                      
                      <Button onClick={onDelete} style={{width:"50%"}} variant="outline-dark">Delete</Button>

                   </Form>
               </Card>
            </Container>
        );
    }
}
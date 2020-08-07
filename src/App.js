import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import AnnouncementCard from "./Components/AnnouncementCard";

let count=0;
let anoun=[];
let searchedAnouncements=[];

class App extends Component{

  constructor(props){
    super(props);

    this.handleChange=this.handleChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    count+=1;
    let id=count;
    anoun.push({
      id: id,
      title: event.target.title.value,
      description:event.target.description.value,
      dateAdded:event.target.dateAdded.value
    });
    this.forceUpdate();
  }
  
  handleDelete(id,event){
    event.preventDefault();
    for(let i=0;i<anoun.length;i++){
      if(anoun[i].id===id){
        anoun.splice(i,1);    
      }
    }
    for(let i=0;i<searchedAnouncements.length;i++){
      if(searchedAnouncements[i].id===id){
        searchedAnouncements.splice(i,1);    
      }
    }
    this.forceUpdate();
  }

  handleSearch(event){
    event.preventDefault();
    const search_text=event.target.search_text.value.split(' ');
    searchedAnouncements=[];
    for(let i=0;i<search_text.length;i++){
      for(let j=0;j<anoun.length;j++){
        let title=anoun[j].title.split(' ');
        let description=anoun[j].description.split(' ');
        if(title.includes(search_text[i]) || description.includes(search_text[i])){
          searchedAnouncements.push(anoun[j]);
          this.forceUpdate();
        }
      }
    }
    // this.forceUpdate();
  }

  handleEdit(id,event){
    event.preventDefault();
    let prop=event.target.name;
    for(let i=0;i<anoun.length;i++){
      if(anoun[i].id===id){
        anoun[i][prop]=event.target.value;
      }
    }
    for(let i=0;i<searchedAnouncements.length;i++){
      if(searchedAnouncements[i].id===id){
        searchedAnouncements[i][prop]=event.target.value;
      }
    }
    this.forceUpdate();
    
  }
  render(){
    let items=[]
    let searchedItems=[]
    if(searchedAnouncements.length===0){
      for(let i=anoun.length-1;i>=0;i--){
        items.push(<AnnouncementCard id={anoun[i].id} title={anoun[i].title} description={anoun[i].description} dateAdded={anoun[i].dateAdded} 
          onDelete={this.handleDelete.bind(this,anoun[i].id)}
          onEdit={this.handleEdit.bind(this,anoun[i].id)}/>)
      }
    }
    else{
      for(let i=searchedAnouncements.length-1;i>=0;i--){
        searchedItems.push(<AnnouncementCard id={searchedAnouncements[i].id} title={searchedAnouncements[i].title} description={searchedAnouncements[i].description} dateAdded={searchedAnouncements[i].dateAdded} 
          onDelete={this.handleDelete.bind(this,searchedAnouncements[i].id)}
          onEdit={this.handleEdit.bind(this,anoun[i].id)}/>)
      }
    }
    return (   
      <div>
          <Header onSearch={this.handleSearch.bind(this)}/>
          <AddForm onChangeValue={this.handleChange}/>
          {searchedItems}    
          {items}        
      </div>
    );
  }
}

export default App;
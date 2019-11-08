import React from 'react';
import './App.css';
import Header from './сomponents/header/header.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayList: []
    };
  }

  componentDidMount() {
    this.apiDataList();
    
  }

  componentWillUnmount() {
  }

  async apiGetTasksList() {
    const response = await fetch(`https://test.megapolis-it.ru/api/list`)
    const json = await response.json();

    this.setState({ arrayList: json });
    console.log(json);
  }

  async createNewtasks(textTask){

    const response = await fetch('https://test.megapolis-it.ru/api/list', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify({
        title: textTask
      })
      
    });
    const json = await response.json();
    
  }

  async editingTask(id){

    const response = await fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify({
        title: "Редактирование 144 id"
      })
      
    });
    const json = await response.json(); 

  }

  async delTask(id){

    const response = await fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'DELETE'
      
      
    });
    const json = await response.json(); 

  }

  render() {
    return (
      <Header />
    );
  }
}

export default App;

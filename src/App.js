import React from 'react';
import './App.css';
import Main from './сomponents/main/main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayList: [],
      loading: false
    };
  }

  componentDidMount() {
    this.apiGetTasksList();
    
  }

  componentWillUnmount() {
  }

  async apiGetTasksList() {
    this.setState({ loading: false });
    const response = await fetch(`https://test.megapolis-it.ru/api/list`)
    const json = await response.json();

    this.setState({ arrayList: json });
    this.setState({ loading: true });
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
      <Main arrayTask={this.state.arrayList} loading = {this.state.loading}/>
    );
  }
}

export default App;

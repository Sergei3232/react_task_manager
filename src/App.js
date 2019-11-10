import React from 'react';
import './App.css';
import Main from './сomponents/main/main';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayList: [],
      formNewTaskOpen: false,
      formEditingTaskOpen: false
    };
  }

  showFormNewTask(){
    this.setState({ formNewTaskOpen: !this.state.formNewTaskOpen });
  }
  
  showFormEditingTask(){
    this.setState({ formEditingTask: !this.state.formEditingTask });
  }

  componentDidMount() {
    this.apiGetTasksList();

  }

  componentWillUnmount() {
  }

  async apiGetTasksList() {

    const response = await fetch(`https://test.megapolis-it.ru/api/list`)
    const json = await response.json();
    this.setState({ arrayList: json.data });

  }

  async createNewtasks(textTask) {

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

  async editingTask(param) {
    const response = await fetch(`https://test.megapolis-it.ru/api/list/${param.id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify({
        title: param.text
      })

    });
    const json = await response.json();

  }

  async delTask(id) {

    const response = await fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'DELETE'


    });
    const json = await response.json();
    this.apiGetTasksList();
  }

  render() {

      return (
        <Main
          arrayTask = {this.state.arrayList}
          refreshBottun = {this.apiGetTasksList.bind(this)}
          delBottun = {this.delTask.bind(this)}
          createNewtasks  = {this.createNewtasks.bind(this)}
          formNewTaskOpen = {this.state.formNewTaskOpen}
          showFormNewTask = {this.showFormNewTask.bind(this)}
          showFormEditingTask = {this.showFormEditingTask.bind(this)}
          formEditingTaskOpen = {this.formEditingTaskOpen} 
          editingTask = {this.editingTask.bind(this)}  
        />
        )  
    
  }
  
}

export default App;

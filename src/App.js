import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TaskDisplayer from './components/TaskDisplayer/TaskDisplayer'
import TaskCreator from './components/TaskCreator/TaskCreator';
import StudentInfo from './components/StudentInfo/StudentInfo';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      chartItems: [{
        id: 0,
        piece: '',
        tempo: 0,
        notes: '',
      }]
    }
    this.addItem = this.addItem.bind(this)
    this.delete = this.delete.bind(this)
    this.saveAndUpdate = this.saveAndUpdate.bind(this)
  }

  componentDidMount() {
    axios.get('/api/chart')
      .then(res => {
        // console.log(res.data[0].piece)
        this.setState({
          chartItems: res.data
        })
      }
      )
  }

  addItem(item) {
    axios.post(`/api/chart`, item)
      .then(res => {
        this.setState({
          chartItems: res.data
        })
      })
  }

  delete(id) {
    axios.delete(`/api/chart/${id}`)
      .then(res => {
        this.setState({
          chartItems: res.data
        })
      })
  }

  saveAndUpdate(res) {
    this.setState({
      chartItems: res.data
    })
  }

  render() {
    return (
      <div className="App">
        <Header className="header" />
        <TaskDisplayer className="task-displayer" chart={this.state.chartItems} deleteFn={this.delete} updateFn={this.saveAndUpdate} />
        <div className="input-boxes">
          <TaskCreator className="task-creator" addToList={this.addItem} />
          <StudentInfo className="student-info" />
        </div>
      </div>
    );
  }
}

export default App;
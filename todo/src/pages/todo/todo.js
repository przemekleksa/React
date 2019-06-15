import React, { Component } from 'react';
import './todo.scss'
import FormToDo from '../../components/form/formToDo';
import Loader from '../../components/loader/loader';
import axios from 'axios';
import { API_URL } from '../../constants/constants'

class ToDo extends Component {
    state = { 
        isFetching: true,
        tasks: {},
        filteredList: ''
     }

    componentDidMount = () => {
        this.loadTask();
    }

    loadTask = () => {
        this.setState({
            isFetching: true
        });
        axios({
            method: 'GET',
            url: API_URL
        }).then((response) => {
            this.setState({
                isFetching: false,
                tasks: response.data.data
            })
        })

    }

    addTask = (task) => {
        this.setState({
            isFetching: true
        });
        axios({
            method: 'post',
            url: API_URL,
            params: {
                todo: task
            }
        }).then((response) => {
            this.loadTask();
        })
    }

    markAsDone = (id) => {
        axios({
            method: 'post',
            url: API_URL + '/' + id,
            params: {
                checked: 1,
                _method: 'patch'
            }
        }).then((response) => {
            this.loadTask();
        })
    }

    filterList = (e) => {
        this.setState({
            filteredList: e.target.value
        })
    } 

    render() { 
        return ( 
            <div className="container">
                <div className="todo">
                    <h1>ToDo</h1>
                    <FormToDo addNewTask={this.addTask} />
                    <Loader isFetching={this.state.isFetching} />
                    <input type='text' onChange={this.filterList} />
                    {this.state.isFetching === false &&
                        <ul>
                            {this.state.tasks.filter((item) => {
                                return (item.checked === 0 && item.todo.includes(this.state.filteredList))
                            }).map((item, key) => {
                                return (
                                    <li onDoubleClick={() => this.markAsDone(item.id)} key={key}>
                                        {item.todo}
                                    </li>
                                );
                            })}
                        </ul>

                    }
                    {
                        (this.state.isFetching === false && this.state.tasks.filter((item) => {
                            return item.checked === 0
                        }).length === 0) &&
                        <div className="alert">
                            Nie masz żadnych zadań do wykonania
                        </div>
                    }
                </div>
            </div>
         );
    }
}
 
export default ToDo;
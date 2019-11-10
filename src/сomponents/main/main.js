import React from 'react';
import FormNewTask from './formNewTask'
import FormEditingTask from './formEditingTask'
import './main.scss';

let idActiveTask = "";
let textTaskEditing = "";

function activeTask({ id }) {
    idActiveTask = id;
}

function textEditingTask(param){
    textTaskEditing = param;
}

function Main(props) {

    const arrayTask       = props.arrayTask;
    const refreshBottun   = props.refreshBottun;
    const delBottun       = props.delBottun;
    const showFormNewTask = props.showFormNewTask;
    const formNewTaskOpen = props.formNewTaskOpen;

    const formEditingTaskOpen = props.formEditingTaskOpen;
    const showFormEditingTask = props.showFormEditingTask;
    const editingTask         = props.editingTask;
    
    let formNewTask = ""
    let formeditingTask = ""

    if (formNewTaskOpen) {
        formNewTask = <FormNewTask createNewtasks = {props.createNewtasks}/>;
    } 

    if (formEditingTaskOpen || textTaskEditing != "") {
        formeditingTask = <FormEditingTask 
        textTaskEditing = {textTaskEditing} 
        idActiveTask    = {idActiveTask} 
        editingTask     = {editingTask} 
        conditionForm   = {showFormEditingTask}
        formNewTaskOpen = {formNewTaskOpen} />;
    } 

    return (
        <main>
            <div className='main'>
                <div className='main__wraper'>
                    <div className='main__box-list'>
                        <table className='main__wraper-table'>
                            <tr className='main__table-header'>
                                <th className='main__header-id'>ID</th>
                                <th className='main__header-task'>TASK</th>
                                <th></th>
                            </tr>
                            {arrayTask.map((item) => {
                                return (
                                    <tr className='main__header-cow' onClick={() => {
                                        activeTask({ id: item.id })
                                    }} >
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.title}
                                            
                                        </td>
                                        <td>
                                            <button className='main__button-editing' 
                                                onClick ={()=>{ 
                                                    textEditingTask(item.title);
                                                    showFormEditingTask();
                                                }}
                                                >Редактировать</button>
                                            <button className='main__button-dell' 
                                                onClick={() => { 
                                                    activeTask({ id: item.id });
                                                    delBottun(idActiveTask); }} >Удалить</button>
                                        </td>
                                    </tr>
                                )
                            }

                            )

                            }


                        </table>
                    </div>
                    <div className='main__box-bottun'>
                        <div className='main__wraper-button'>
                            <button className='main__button-refresh' onClick={refreshBottun} >Обновить</button>
                            <button className='main__button-refresh' onSubmit={(e) => {e.preventDefault()}} onClick={() => {showFormNewTask()}}>Создать</button>
                        </div>
                    </div>
                </div>
                {/* <div className='main__wraper-bottun'>
                    
                        <button onSubmit={(e) => {e.preventDefault()}} onClick={() => {showFormNewTask()}}>Создать</button>
                    
                </div> */}
                {formNewTask}
                {formeditingTask}
            </div>

        </main>
    );
}

export default Main;
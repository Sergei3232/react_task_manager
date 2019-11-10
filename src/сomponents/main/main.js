import React from 'react';
import './main.css';

let idActiveTask = "";
function activeTask({ id }) {
    idActiveTask = id;
}

function Main(props) {

    const arrayTask = props.arrayTask;
    const refreshBottun = props.refreshBottun;
    const delBottun = props.delBottun;
    const createNewtasks = props.createNewtasks;
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
                                            <button className='main__button-editing'>Редактировать</button>
                                            <button className='main__button-dell' 
                                                onClick={() => { 
                                                    activeTask({ id: item.id });
                                                    delBottun(idActiveTask) }} >Удалить</button>
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
                            <button onClick={refreshBottun} className='main__button-refresh'>Обновить</button>
                        </div>
                    </div>
                </div>
                <div className='main__wraper-bottun'>
                    <form>
        
                        <button onClick={() => { createNewtasks(`Новый заказ новый заказ ${new Date()}`) }}>Создать</button>
                    </form>
                </div>
            </div>

        </main>
    );
}

export default Main;
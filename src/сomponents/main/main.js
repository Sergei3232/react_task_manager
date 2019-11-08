import React from 'react';
import './main.css';

function tableList(params) {
    return (
        <tr className='main__header-cow'>
            <td>
                Бла бла
                {/* {params.id} */}
            </td>
            <td>
                Бла бла
                {/* {params.text} */}
            </td>
        </tr>
    )
}

function Main(props) {

    
    return (
        <main>
            <div className='main'>
                <div className='main__box-list'>
                    <table className='main__wraper-table'>
                        <tr className='main__header-cow'>
                            <td>"ID"</td>
                            <td>"TASK"</td>
                        </tr>
                        {
                            props.arrayTask.map((elem) => {
                                tableList(elem);
                            }
                            )}

                    </table>
                </div>
                <div className='main__box-bottun'>
                    <div className='main__wraper-button'>
                        <button className='main__button-refresh'>Обновить</button>
                    </div>
                </div>

                {/* <h1>Заголовок</h1> */}
            </div>
        </main>
    );
}

export default Main;
import React from 'react';

function FormNewTask(props) {
    const createNewtasks = props.createNewtasks;
    const showFormNewTask = props.showFormNewTask;
    return (
        <div className="new-application">
            <div className="new-application__title">
                New Task
            </div>

            <div className="new-application__form">
                <div className="form">
                    <textarea
                        type="tetx"
                        className="form__description"
                        name="description"
                    >
                    </textarea>
                    <button
                        type="submit"
                        className="form__sent-application"
                        onClick={() => {
                            createNewtasks(document.querySelector('.form__description').value);
                            showFormNewTask();
                        }}
                    >
                        Сохранить
                    </button>
                    <button
                        className="form__close"
                        onClick={(e) => {
                            showFormNewTask();
                        }}
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormNewTask;
import React from 'react';
import './formEditingTask.scss'

function FormEditingTask(props) {
    const textTaskEditing = props.textTaskEditing;
    const idActiveTask = props.idActiveTask;
    const editingTask = props.editingTask;
    const showFormEditingTask = props.showFormEditingTask;

    return (
        <div className="new-application">
            <div className="new-application__title">
                Editing Task
            </div>

            <div className="new-application__form">

                <div className="form">
                    <div>
                        <textarea
                            type="tetx"
                            className="form__description"
                            name="description"
                        >{textTaskEditing}

                        </textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="form__sent-application"
                            onClick={() => {
                                showFormEditingTask();
                                editingTask({
                                    id: idActiveTask,
                                    text: document.querySelector('.form__description').value
                                });

                            }}
                        >
                            Сохранить
                        </button>
                        <button
                            className="form__close"
                            onClick={(e) => {
                                showFormEditingTask()
                            }}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditingTask;
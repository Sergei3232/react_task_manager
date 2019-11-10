import React from 'react';

function FormEditingTask (props) {
    const textTaskEditing = props.textTaskEditing;
    const idActiveTask = props.idActiveTask;
    const editingTask = props.editingTask;

    return (
        <div className="new-application">
            <div className="new-application__title">
                Editing Task
            </div>
            
            <div className="new-application__form">
                <form className="form">                    
                    <textarea 
                        type="tetx" 
                        className="form__description" 
                        name="description"
                    >{textTaskEditing}
                    </textarea>
                    <button 
                        type="submit" 
                        className="form__sent-application"
                        onClick={() => {
                            editingTask({
                                id: idActiveTask,
                                text: document.querySelector('.form__description').value
                                });
                        }}
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormEditingTask;
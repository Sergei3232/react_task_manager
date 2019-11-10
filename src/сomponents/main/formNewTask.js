import React from 'react';

function FormNewTask (props) {
    const createNewtasks = props.createNewtasks;

    return (
        <div className="new-application">
            <div className="new-application__title">
                New Task
            </div>
            
            <div className="new-application__form">
                <form className="form">                    
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
                        }}
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormNewTask;
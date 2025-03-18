import React from 'react';

const TeacherCreate = () => {
    return (
        <div>
            <h1>Create Teacher</h1>
            <p>This page will contain a form to create a new teacher.</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default TeacherCreate;

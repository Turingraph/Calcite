import React, {
    useState
}
from 'react';
import './App.css';

const FormExample = () => {

    const [name, setName] = useState('');

    // Event handlers to update state variables
    const handleNameChange = (event) => {
        setName(event.target.value);
    };



    return (
        <div className="form-container">
            <h2>Input Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormExample;

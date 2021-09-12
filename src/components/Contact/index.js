import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers'

const Contact = () => {
    const [ formState, setFormState ] = useState([{ name: '', email: '',  }]);
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
 
    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section className="contact">
            <h4>LET'S CHAT</h4>
            <div className="contact-form">
            <form id="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="name"/>
            
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="email" />
                
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="message" />
        

                {errorMessage && (
                    <div>
                        <p className="error-text"> {errorMessage} </p>
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>
            </div>
        </section>
    )
}

export default Contact;
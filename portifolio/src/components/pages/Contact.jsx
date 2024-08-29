import React, {useState} from "react";

export default function Contact() {

    const maxLength = 2000;
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const chacaracteres = maxLength - text.length



    return (
        <section>
            <h1>Contact Me!</h1>
            <div>
                <form action="post">
                    <input type="text" name="name" id="name" placeholder="Digite o seu nome..." />
                    <input type="text" name="email" id="email" placeholder="Digite o seu email..." />
                    <textarea name="message" id="message" cols="30" rows="10" value={text} onChange={handleChange} maxLength={maxLength} placeholder="Digite o seu texto aqui...">
                    <p>{chacaracteres}/{maxLength}</p>
                    </textarea>
                </form>
            </div>
        </section>
    );
}
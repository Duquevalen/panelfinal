import "./reportes.css"
import { useState } from "react";

const Reportes = () => {

    const [values, setValues] = useState({

        name: '',
        email: '',
        phone: '',
    });


    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });

    }


    const handleForm = (event) => {

        event.preventDefault();
        console.log(values);

    }




    return (
        <div class="form" id="myForm">
            <form onSubmit={handleForm}>
                <h1 className="qyw">*quejas y reportes*</h1>

                <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Ingrese su nombre "
                    onChange={handleInputChange}
                />
                <br />


                <input
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Ingrese su email"
                    onChange={handleInputChange}
                />
                <br />


                <input
                    className="tel"
                    type="number"
                    name="phone"
                    value={values.phone}
                    placeholder="Ingrese su teléfono"
                    onChange={handleInputChange}
                />
                <br />

                <input
                    className="men"
                    type="message"
                    name="message"
                    value={values.mensaje}
                    placeholder="Mensaje"
                    onChange={handleInputChange}
                />
                <br />



                <button type="submit"> Enviar  </button>

            </form>
        </div>
    );
}

export default Reportes;

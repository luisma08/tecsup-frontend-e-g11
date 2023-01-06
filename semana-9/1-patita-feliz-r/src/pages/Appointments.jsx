import { useState } from "react";

const Appointments = () => {

    const [cuantity, setCuantity] = useState(1);

    const createAppointment = () => {
        setCuantity(cuantity + 1);
    };

    return (
        <section className="py-4">
            <div className="container d-flex justify-content-between">
                <div className="badge text-bg-primary d-flex align-items-center gap-1 pe-auto">
                Appointments <span className="badge text-bg-secondary">{cuantity}</span>
                </div>
                <button className="btn btn-primary" onClick={createAppointment}>Registrar cita</button>
            </div>
        </section>
    );
}

export default Appointments;
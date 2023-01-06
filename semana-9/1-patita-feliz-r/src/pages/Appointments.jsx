import AppointmentsForm from "../components/sections/appointments/AppointmentsForm";

const Appointments = () => {
    return (
        <section className="py-4">
            <div className="container d-flex justify-content-between">
                <AppointmentsForm />
            </div>
        </section>
    );
}

export default Appointments;
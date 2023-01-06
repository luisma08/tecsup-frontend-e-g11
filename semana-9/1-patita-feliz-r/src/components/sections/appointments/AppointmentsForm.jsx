const AppointmentsForm = () => {
    return ( 
        <div>
            <h3>Crear Cita</h3>
            <form>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
                    <label for="floatingInputValue">Input with value</label>
                </div>
            </form>
        </div>
     );
}
 
export default AppointmentsForm;
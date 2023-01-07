const AppointmentsCards = ({ appointments }) => {
    return (
      <ul>
        {appointments.map((element, index) => {
          const { mascota, propietario, fecha, hora, síntomas } = element;
          return (
            <li key={index}>
              <ul>
                <li>{mascota}</li>
                <li>{propietario}</li>
                <li>{fecha}</li>
                <li>{hora}</li>
                <li>{síntomas}</li>
              </ul>
            </li>
          )
        })}
      </ul>
    );
  };
  
  export default AppointmentsCards;
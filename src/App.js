import React, { useState } from 'react';
import './App.css';

function App() {
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [habitacion, setHabitacion] = useState('');
  const [rh, setRh] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si algún campo está vacío
    if (!identificacion || !nombres || !apellidos || !telefono || !habitacion || !rh || !fechaIngreso || !fechaSalida) {
      alert('Por favor, complete todos los campos');
    } else {
      // Realizar la lógica de registro aquí (por ejemplo, enviar los datos a un servidor)
      // Después de completar la lógica, mostrar un mensaje de éxito usando alert
      alert('Registro exitoso');

      // Limpiar los campos después de un registro exitoso
      setIdentificacion('');
      setNombres('');
      setApellidos('');
      setTelefono('');
      setHabitacion('');
      setRh('');
      setFechaIngreso('');
      setFechaSalida('');

    }
  };

  return (
    <div className="App">
      <h1>Registro Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="identificacion">Identificación:</label>
        <input
          type="text"
          id="identificacion"
          name="identificacion"
          value={identificacion}
          onChange={(e) => setIdentificacion(e.target.value)}
        />

        <label htmlFor="nombres">Nombres:</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
        />

        <label htmlFor="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <label htmlFor="habitacion">Habitación:</label>
        <input
          type="text"
          id="habitacion"
          name="habitacion"
          value={habitacion}
          onChange={(e) => setHabitacion(e.target.value)}
        />

        <label htmlFor="rh">RH:</label>
        <select id="rh" name="rh" value={rh} onChange={(e) => setRh(e.target.value)}>
          <option value="">Seleccione RH</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <label htmlFor="fechaIngreso">Fecha de Ingreso:</label>
        <input
          type="date"
          id="fechaIngreso"
          name="fechaIngreso"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
        />

        <label htmlFor="fechaSalida">Fecha de Salida:</label>
        <input
          type="date"
          id="fechaSalida"
          name="fechaSalida"
          value={fechaSalida}
          onChange={(e) => setFechaSalida(e.target.value)}
        />

        <button type="submit">Registro</button>
        <button type="button">Cancelar</button>
      </form>

      
    </div>
  );
}

export default App;

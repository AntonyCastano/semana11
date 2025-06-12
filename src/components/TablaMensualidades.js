import React, { Component } from 'react';

class TablaMensualidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensualidades: []
    };

    this.cargarDatos = this.cargarDatos.bind(this);
  }

  cargarDatos() {
    const data = [
      { estudiante: 'Ana López', mes: 'Enero', valor: 120000 },
      { estudiante: 'Carlos Pérez', mes: 'Febrero', valor: 125000 }
    ];

    this.setState({ mensualidades: data });
  }

  render() {
    return (
      <div>
        <button onClick={this.cargarDatos}>Cargar información</button>
        <table border="1">
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Mes</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mensualidades.map((item, index) => (
              <tr key={index}>
                <td>{item.estudiante}</td>
                <td>{item.mes}</td>
                <td>{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablaMensualidades;

'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    fechaDeNacimiento: '',
    comentario: '',
  });

  const [submittedData, setSubmittedData] = useState<any[]>([]); // Store submitted data

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSubmittedData([...submittedData, formData]);

    setFormData({ nombreCompleto: '', fechaDeNacimiento: '', comentario: '' });
  };

  return (
    <div className="container mx-auto max-w-xl p-8">
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <div className="space-y-2">
          <label htmlFor="nombreCompleto">Nombre completo:</label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-gainsboro"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="fechaDeNacimiento">Feha de nacimiento:</label>
          <input
            type="date"
            id="fechaDeNacimiento"
            name="fechaDeNacimiento"
            value={formData.fechaDeNacimiento}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="comentario">Comentario:</label>
          <textarea
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Guardar
        </button>
      </form>

      {submittedData.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-center font-lalezar">Datos:</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <p>Nombre completo: {data.nombreCompleto}</p>
                <p>Fecha de nacimiento: {data.fechaDeNacimiento}</p>
                <p>Comentario: {data.comentario}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Form;

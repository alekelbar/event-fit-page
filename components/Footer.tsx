import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={footerContent}>
        <div style={columnStyles}>
          <ul style={listStyles}>
            <li>Descubre</li>
            <li>Integrantes</li>
            <li>Módulo de negocios</li>
          </ul>
        </div>
        <div style={columnStyles}>
          <ul style={listStyles}>
            <li>Contactanos</li>
            <li>Formulario de contacto</li>
            <li>+506 8630-7982</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const footerStyles: React.CSSProperties = {
  backgroundColor: '#176B87',
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px',
  fontFamily: 'Lato, sans-serif', // Cambio de fuente a Lato
  color: 'white',
  textAlign: 'center', // Centro el contenido
  padding: '20px 0', // Espacio alrededor del contenido
};

const footerContent: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '800px', // Limita el ancho del contenido
  margin: '0 auto', // Centra el contenido horizontalmente
};

const columnStyles: React.CSSProperties = {
  width: '45%', // Ajusta el ancho de las columnas
};

const listStyles: React.CSSProperties = {
  listStyle: 'none', // Elimina los puntos de la lista
  fontSize: '12px', // Tamaño de fuente de 12px
  margin: '0',
  padding: '0',
};

export default Footer;

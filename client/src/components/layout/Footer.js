import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white mt-5 p-4 text-center"
      style={{ backgroundColor: 'black' }}
    >
      Copyright &copy; {new Date().getFullYear()} Name of project
    </footer>
  );
};

export default Footer;

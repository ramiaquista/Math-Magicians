import React from 'react';

const quoteSection = {
  flexDirection: 'column',
  padding: '10rem',
  alignItems: 'center',
  justifyContent: 'center',
};

const quoteText = {
  fontSize: '35px',
  fontStyle: 'italic',
};

const Quote = () => (
  <section className="d-flex" style={quoteSection}>
    <h2 style={quoteText}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding. - William Paul Thurston.
    </h2>
  </section>
);

export default Quote;

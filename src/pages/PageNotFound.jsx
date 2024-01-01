import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function PageNotFound() {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <section>
      <h2>404</h2>
      <p>{selectLanguage({ id: 'Halaman tidak ditemukan 404.', en: 'Page not found 404.' })}</p>
    </section>
  );
}

export default PageNotFound;

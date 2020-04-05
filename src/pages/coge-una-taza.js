import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SecondPage = () => (
  <Layout>
    <SEO title="Coge una taza" />
    <h2>Coge una taza</h2>
    <p>
      Si después de tanta chapa te has quedado con ganas de decirme algo,
      escríbeme a <a href={'mailto:info@ccafeteoria.es'}>info@cafeteoria.es</a>{' '}
      y cuéntame tu vida; se me da bien escuchar. Ya se trate de cualquier
      comentario, como de escribir alguna columna o colgar algún artículo
      académico, estaré esperando tus noticias.
    </p>
  </Layout>
);

export default SecondPage;

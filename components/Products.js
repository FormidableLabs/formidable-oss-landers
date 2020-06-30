import { html, css } from 'https://unpkg.com/rplus';

import Title from './Title.js';
import Media from './Media.js';

export default () => html`
  <section>
    <${Title} />
    <div>
      <${Media} />
      <${Media} />
      <${Media} />
      <${Media} />
    </div>
  </section>
`;

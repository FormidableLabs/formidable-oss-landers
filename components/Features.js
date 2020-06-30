import { html, css } from 'https://unpkg.com/rplus';

import Card from './Card.js';

export default () => html`
  <section>
    <${Card} />
    <${Card} />
    <${Card} />
  </section>
`;

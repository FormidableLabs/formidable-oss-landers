import { html, css } from 'https://unpkg.com/rplus';

import Title from './Title.js';
import Text from './Text.js';
import Button from './Button.js';
import Link from './Link.js';

export default () => html`
  <section>
    <${Title} />
    <${Text} />
    <${Button} />
    <div>
      <${Link} />
      <${Link} />
      <${Link} />
    </div>
  </section>
`;

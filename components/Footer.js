import { html } from 'https://unpkg.com/rplus';

import Logo from './Logo.js';
import Link from './Link.js';
import Text from './Text.js';

export default () => html`
  <section>
    <${Logo} />
    <div>
      <${Link} />
      <${Link} />
    </div>
    <${Text} />
  </section>
`;

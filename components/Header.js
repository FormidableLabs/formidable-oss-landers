import { html } from 'https://unpkg.com/rplus';

import Badge from './Badge.js';
import Title from './Title.js';
import Text from './Text.js';
import Form from './Form.js';
import Nav from './Nav.js';

export default () => html`
  <header>
    <${Badge} />
    <${Title} />
    <${Text} />
    <${Form} />
    <${Nav} />
  </header>
`;

import { html } from 'https://unpkg.com/rplus';

import Title from './Title.js';
import Text from './Text.js';
import Editor from './Editor.js';

export default () => html`
  <section>
    <${Title} />
    <${Text} />
    <${Editor} />
  </section>
`;

import { react, html } from 'https://unpkg.com/rplus';

import Header from './components/Header.js';
import Ribbon from './components/Ribbon.js';
import Features from './components/Features.js';
import Example from './components/Example.js';
import Guide from './components/Guide.js';
import Products from './components/Products.js';
import Footer from './components/Footer.js';

const Page = () => {
  return html`
    <${Ribbon} />
    <${Header} />
    <${Features} />
    <${Example} />
    <${Guide} />
    <${Products} />
    <${Footer} />
  `;
};

react.render(html`<${Page} />`, document.body);

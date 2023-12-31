import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import global_en from "./Translations/en/global.json";
import global_az from "./Translations/az/global.json";
import global_ru from "./Translations/ru/global.json";
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    az: {
      global: global_az
    },
    ru: {
      global: global_ru
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <I18nextProvider i18n={i18next} >
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </>
);

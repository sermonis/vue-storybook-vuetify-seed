import { configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import router from "../src/router/index.js";
import store from "../src/store/index.js";
import vuetifyConfig from "../src/plugins/vuetify";
import "vuetify/src/styles/main.sass";
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// From https://github.com/nidkil/vuetify-with-storybook
const vuetifyViewports = {
  VuetifyLg: {
    name: 'Vuetify LG',
    styles: {
      width: '1904px'
    },
    type: 'desktop'
  },
  VuetifyXs: {
    name: 'Vuetify XS',
    styles: {
      width: '600px'
    },
    type: 'mobile'
  },
  VuetifySm: {
    name: 'Vuetify SM',
    styles: {
      width: '960px'
    },
    type: 'mobile'
  },
  VuetifyMd: {
    name: 'Vuetify MD',
    styles: {
      width: '1264px'
    },
    type: 'tablet'
  },
  VuetifyXl: {
    name: 'Vuetify XL',
    styles: {
      width: '4096px'
    },
    type: 'desktop'
  }
}
configureViewport({
  defaultViewport: 'VuetifyMd',
  viewports: {
    ...vuetifyViewports,
    ...INITIAL_VIEWPORTS
  }
});
addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><v-content><v-container><v-layout column><story/></v-layout></v-container></v-content></v-app>',
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

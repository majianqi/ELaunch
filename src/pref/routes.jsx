import React from 'react'
import i18n from '../../app/i18n'
import Main from './containers/Main'
import General from './components/General'
import Shortcuts from './components/Shortcuts'

const container = (props) => props.children
const t = i18n.t.bind(i18n)

export default {
  path: '/',
  component: Main,
  indexRoute: { onEnter: (nextState, replace) => replace('/global/general') },
  childRoutes: [{
    path: 'global',
    text: t('Global'),
    component: container,
    childRoutes: [{
      path: 'general', // 样式
      component: General,
      text: t('General'),
    }, {
      path: 'shortcuts',
      text: t('Shortcuts'),
      component: Shortcuts,
    }],
  }, {
    path: 'plugins',
    text: t('Plugins'),
    component: container,
    childRoutes: [{
      path: 'installed',
      text: t('Installed Plugins'),
      component: container,
    }, {
      path: 'available',
      text: t('Available Plugins'),
      component: container,
    }, {
      path: 'themes',
      text: t('Themes'),
      component: container,
    }],
  }],
}
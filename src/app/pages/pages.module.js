/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: '页面',
      icon: 'ion-document',
      subMenu: [{
        title: '登录',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: '登出',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: '用户设置',
        stateRef: 'profile'
      }, {
        title: '404 页面',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: '菜单分级 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: '菜单分级 1.1',
        disabled: true
      }, {
        title: '菜单分级 1.2',
        subMenu: [{
          title: '菜单分级 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();

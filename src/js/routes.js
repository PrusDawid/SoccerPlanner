
import HomePage from '../pages/home.f7.html';

import PlayerAddPage from '../pages/playerAdd.f7.html'

import TeamsPage from '../pages/teams.f7.html'

import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/players/',
    component: PlayerAddPage
  },
  {
    path: '/teams/',
    component: TeamsPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
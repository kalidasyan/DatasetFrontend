import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import DatasetList from './components/dataset_list';
import DatasetNew from './components/dataset_new';
import DatasetShow from './components/dataset_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DatasetList} />
    <Route path="dataset/new" component={DatasetNew} />
    <Route path="dataset/update" component={DatasetNew} />
    <Route path="dataset/:id" component={DatasetShow} />
  </Route>
);

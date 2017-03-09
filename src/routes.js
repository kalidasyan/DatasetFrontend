import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import DatasetList from './components/dataset_list';
import DatasetEdit from './components/dataset_edit';
import DatasetShow from './components/dataset_show';
import MethodList from './components/method_list';
import StatisticsDisplay from './components/statistics_display';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DatasetList} />
    <Route path="dataset/new" component={DatasetEdit} />
    <Route path="dataset/update" component={DatasetEdit} />
    <Route path="dataset/:id" component={DatasetShow} />
    <Route path="method" component={MethodList}/>
    <Route path="statisticsDisplay/:platform/:location" component={StatisticsDisplay}/>
  </Route>
);

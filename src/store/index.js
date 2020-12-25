// 此处生成并导出store 应用中间件
// App.js导入store,并通过react-redux中的<Provider store={store}>将store的state共享到context

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 应用中间件thunk和redux-devtools
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
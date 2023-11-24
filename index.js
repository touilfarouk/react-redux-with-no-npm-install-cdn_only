
import App from './App';
import { store } from './app/store';
const { Provider } =ReactRedux

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

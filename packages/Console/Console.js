import { log } from './actions';

class Console {
  static store = null;

  constructor ({ store }) {
    this.store = store;
  }

  start () {
    this.intercept();
  }

  static intercept (...args) {
    const console = window.console;
    if (!console) return;
    function intercept(method){
        const original = console[method];
        console[method] = () => {

            if (this.store) {
              this.store.dispatch(log('test'));
            }
            original.apply(console, args);
        };
    }
    const methods = ['log', 'warn', 'error'];
    for (let i = 0; i < methods.length; i += 1)
        intercept(methods[i]);
  }
};

export default Console;

import { cloneDeep } from 'lodash-es'; // 为了测试打包

class Observer {
  update(data) {
    console.log('received data: ', data);
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(cloneDeep(observer));
  }

  notify(data) {
    this.observers.forEach((ob) => {
      ob.update(data);
    });
  }
}

export { Observer, Subject };

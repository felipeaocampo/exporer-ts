type Callback = () => void;

class Eventing {
  events: { [key: string]: Callback[] } = {};

  constructor() {
    this.on = this.on.bind(this);
    this.trigger = this.trigger.bind(this);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => callback());
  }
}

export default Eventing;

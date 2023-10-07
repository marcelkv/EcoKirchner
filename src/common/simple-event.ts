import { ISimpleEvent } from "./simple-event.interface";

export class SimpleEvent<T = void> implements ISimpleEvent<T> {
  private listeners: ((data: T) => void)[] = [];

  on(listener: (data: T) => void) {
    this.listeners.push(listener);
  }

  removeListener(listener: (data: T) => void) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  emit(data: T) {
    for (const listener of this.listeners) {
      listener(data);
    }
  }
}

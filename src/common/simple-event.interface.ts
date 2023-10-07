export interface ISimpleEvent<T = void> {
  on(listener: (data: T) => void): void;
  removeListener(listener: (data: T) => void): void;
  emit(data: T): void;
}

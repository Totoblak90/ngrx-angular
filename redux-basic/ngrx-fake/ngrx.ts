// Actions: An actions is an interface that recieves a type that is mandatory and a payload wich is optional.
export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}

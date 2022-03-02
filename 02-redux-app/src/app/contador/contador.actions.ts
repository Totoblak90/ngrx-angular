import { createAction } from '@ngrx/store';

export const incrementar = createAction('[Contador] INCREMENTAR');
export const decrementar = createAction('[Contador] DECREMENTAR');
export const multiplicar = createAction('[Contador] MULTIPLICAR');
export const dividir = createAction('[Contador] DIVIDIR');
export const reset = createAction('[Contador] RESET');

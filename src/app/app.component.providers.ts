import { InjectionToken, Type } from '@angular/core';
import * as Actions from './actions';

interface ActionInterface {
  token: InjectionToken<Actions.ActionBase>;
  action: Type<Actions.ActionBase>;
}

export const provider: { [key: string]: ActionInterface } = {
  alert: {
    token: new InjectionToken<Actions.AlertAction>('alert'),
    action: Actions.AlertAction,
  },
  console: {
    token: new InjectionToken<Actions.ConsoleAction>('console'),
    action: Actions.ConsoleAction,
  },
  redirect: {
    token: new InjectionToken<Actions.RedirectAction>('redirect'),
    action: Actions.RedirectAction,
  },
  background: {
    token: new InjectionToken<Actions.BackgroundAction>('background'),
    action: Actions.BackgroundAction,
  },
};

export const providers = Object.keys(provider).map((key) => ({
  provide: provider[key].token,
  useClass: provider[key].action,
}));

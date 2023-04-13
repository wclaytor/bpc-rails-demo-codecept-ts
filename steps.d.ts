/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type homePage = typeof import('./pages/Homepage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, homePage, current: any }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

declare module "scroll-lock" {
  export function disablePageScroll(target?: HTMLElement | null): void;
  export function enablePageScroll(target?: HTMLElement | null): void;
}

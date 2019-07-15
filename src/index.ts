import * as React from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function useScrollLock(
  enabled: boolean = true,
  ref?: React.RefObject<HTMLElement>
) {
  const disabledRef = React.useRef(false);

  // scroll-lock uses an internal queue. we need to ensure that we only enable
  // scrolling here if we have already disabled scrolling.
  React.useEffect(() => {
    if (enabled && !disabledRef.current) {
      disablePageScroll(ref ? ref.current : undefined);
      disabledRef.current = true;
    }

    return () => {
      if (disabledRef.current) {
        enablePageScroll(ref ? ref.current : undefined);
        disabledRef.current = false;
      }
    };
  }, [enabled, ref, disabledRef]);
}

export default useScrollLock;

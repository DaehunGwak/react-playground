import {useEffect} from "react";

/**
 * 백그라운드 스크롤 가능 문제
 * https://medium.com/@nikhil_gupta/how-to-disable-background-scroll-when-a-modal-side-drawer-is-open-in-react-js-999653a8eebb
 */
function usePreventScrollBodyViewModel() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  });
}

export default usePreventScrollBodyViewModel;

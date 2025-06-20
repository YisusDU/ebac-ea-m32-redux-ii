import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useStoreTypes";
import { toggleMenu } from "../state/guides.slice";

interface RefProps {
  mainRef: React.RefObject<HTMLElement | null>;
  headerRef: React.RefObject<HTMLElement | null>;
}

const useFixedHeader = ({ headerRef, mainRef }: RefProps) => {
  const menuDisplay = useAppSelector((state) => state.guides.menuDisplay);
  const [headerHeight, setHeaderHeight] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const changeDisplay = () => {
      if (window.scrollY > 165) {
        dispatch(toggleMenu(true));
      } else {
        dispatch(toggleMenu(false));
      }
    };
    window.addEventListener("scroll", changeDisplay);
    return () => window.removeEventListener("scroll", changeDisplay);
  }, [dispatch]);

  useEffect(() => {
    if (menuDisplay && headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.marginTop = `${headerHeight}px`;
    }
  }, [headerHeight, mainRef]);
};

export default useFixedHeader;

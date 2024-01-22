import { useEffect, useState } from "react";
import  useScreenWidth  from "./useScreenWidth";


const useMediaWidth = (screenSizeBoolean: boolean) => {
    const windowWidth = useScreenWidth();
    const [shouldRender, setShouldRender] = useState(false);
  
    useEffect(() => {
      setShouldRender(screenSizeBoolean);
    }, [windowWidth, screenSizeBoolean]);

  return shouldRender;
}

export default useMediaWidth;
import { useState, useEffect } from "react";

export const useParallaxBanner = ({setScrollPosition, setwidthWindow}) =>{ 

    const handleScroll = () => setScrollPosition(window.pageYOffset);
    const handleSize = () => setwidthWindow(window.outerWidth);

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll, { passive: true});
        return ()=>(window.removeEventListener("scroll", handleScroll));
    }, []);

    useEffect(()=> {
        console.log("Aqui ivan");
        window.addEventListener("resize", handleSize, { passive: true});
        return ()=>(window.removeEventListener("resize", handleSize));
    }, []);
}

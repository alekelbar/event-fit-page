'use client'

import { useState, useEffect, useCallback } from "react";
import { useIsClient } from "../context/IsClientContext";

export const useScreenSize = () => {
    const isClient = useIsClient();

    const [windowSize, setWindowSize] = useState({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
    });

    const updateWindowSize = useCallback(
        () => {
            setWindowSize({
                width: isClient ? window.innerWidth : 0,
                height: isClient ? window.innerHeight : 0,
            });
        },
        [setWindowSize, isClient],
    )


    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
        return () => {
            window.removeEventListener("resize", updateWindowSize);
        };
    }, [isClient, updateWindowSize]);

    return { windowSize };
}

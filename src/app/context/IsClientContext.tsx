import { useState, createContext, useEffect, useContext } from "react";

const IsClientCtx = createContext(false);

interface IsClientProps {
    children: React.ReactNode
}

export const IsClientCtxProvider: React.FC<IsClientProps> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);
    return (
        <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
    );
};

export function useIsClient() {
    return useContext(IsClientCtx);
}
import { createContext, createElement, FC, useContext } from "react";

export function createSafeContext<ContextValue>(errorMessage: string) {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const Provider: FC<{ value: ContextValue; children: React.ReactNode }> = ({
    children,
    value,
  }) => {
    return createElement(Context.Provider, { value }, children);
  };

  return [Provider, useSafeContext] as const;
}

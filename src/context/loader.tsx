import Loader from "@/components/Loader";
import React, { createContext, useContext, useState } from "react";

interface ILoader {
  loader: boolean;
  // setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setLoader: any;
}

const DefaultValues: ILoader = {
  loader: false,
  setLoader: () => null,
};

const LoaderContext = createContext<ILoader>(DefaultValues);

const LoaderProvider = ({ children }: any) => {
  const [loader, setLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {loader && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;

export const useLoader = () => {
  return useContext(LoaderContext);
};

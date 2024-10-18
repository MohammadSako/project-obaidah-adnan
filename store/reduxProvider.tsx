"use client"; // Mark this component as a Client Component

import { Provider } from "react-redux";
import store from "./index";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

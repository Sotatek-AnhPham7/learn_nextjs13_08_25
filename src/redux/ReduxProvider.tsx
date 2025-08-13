"use client"; // bắt buộc để chạy được ở browser

import { Provider } from "react-redux";
import { store } from ".";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

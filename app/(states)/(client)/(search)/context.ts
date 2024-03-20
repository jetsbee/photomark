"use client";

import { createContext } from "react";
import { SearchStore } from "./store";

export const SearchContext = createContext<SearchStore | null>(null);
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#creating-a-context-with-reactcreatecontext

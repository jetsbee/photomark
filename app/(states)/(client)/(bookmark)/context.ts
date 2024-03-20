"use client";

import { createContext } from "react";
import { BookmarkStore } from "./store";

export const BookmarkContext = createContext<BookmarkStore | null>(null);
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#creating-a-context-with-reactcreatecontext

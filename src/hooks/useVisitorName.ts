"use client";

import { useSyncExternalStore } from "react";

const KEY = "bj-visitor-name";
let cached: string | null = null;
const listeners = new Set<() => void>();

function read(): string {
  if (cached !== null) return cached;
  try {
    cached = localStorage.getItem(KEY) ?? "";
  } catch {
    cached = "";
  }
  return cached;
}

function emit() {
  listeners.forEach((l) => l());
}

export function setVisitorName(name: string) {
  cached = name;
  try {
    localStorage.setItem(KEY, name);
  } catch {
    /* ignore */
  }
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useVisitorName() {
  return useSyncExternalStore(subscribe, read, () => "");
}

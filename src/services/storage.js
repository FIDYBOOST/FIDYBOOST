// src/services/storage.js
export const StorageService = {
  get: (key, def) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : def;
    } catch { return def; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
};
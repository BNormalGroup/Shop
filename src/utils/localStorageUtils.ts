export const addLocalStorage = (keyStorage: string, value: string): void => {
  localStorage.setItem(keyStorage, value);
};

export const deleteLocalStorage = (keyStorage: string): void => {
  localStorage.removeItem(keyStorage);
};

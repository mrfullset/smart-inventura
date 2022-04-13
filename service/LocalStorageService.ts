import StorageContent from "../types/Storage";
import StorageProduct from "../types/StorageProduct";

export const start = (warehouseId: string) => {
  if (localStorage.getItem("inventura")) {
    return;
  }

  const initContent: StorageContent = {
    startDateTs: Date.now() / 1000,
    warehouseId,
    products: [],
  };

  localStorage.clear();
  saveStorage(initContent);
};

const getStorage = () => {
  return JSON.parse(localStorage.getItem("inventura")!) as StorageContent;
};

const saveStorage = (storage: StorageContent) => {
  localStorage.setItem("inventura", JSON.stringify(storage));
};

export const getProduct = (code: string) => {
  const storage = getStorage();
  return storage.products.find((product) => product.code === code);
};

export const addOrUpdateProduct = (product: StorageProduct) => {
  const storage = getStorage();
  const savedIndex = storage.products.findIndex((p) => p.code === product.code);
  if (savedIndex === -1) {
    storage.products.push(product);
  } else {
    storage.products[savedIndex] = product;
  }
  saveStorage(storage);
};

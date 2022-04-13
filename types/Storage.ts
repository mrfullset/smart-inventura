import StorageProduct from "./StorageProduct";

interface StorageContent {
  startDateTs: number;
  warehouseId: string;
  products: StorageProduct[];
}

export default StorageContent;

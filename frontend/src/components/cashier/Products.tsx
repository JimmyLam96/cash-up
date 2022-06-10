import { FC, useEffect, useState } from "react";
import { addDoc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../../firebase";
import CashierProduct from "components/butttons/CashierProduct";
import { BsPlusLg } from "react-icons/bs";
import { useReceiptContext } from "contexts/ReceiptProvider";
import { Product } from "interfaces/product.interface";

const addNewProduct = async ({
  name,
  price,
  category,
  description,
}: {
  name: string;
  price: number;
  category: string;
  description: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name,
      price,
      category,
      description,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

type props = {
  className?: string;
};
const Products: FC<props> = ({ className, ...rest }: props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<DocumentData[]>([]);
  const { addSelectedProduct } = useReceiptContext();

  useEffect(() => {
    let isMounted = true;

    const getAndSetDocs = async (
      collectionName: string,
      setState: <T extends Product>(data: T[]) => void
    ) => {
      try {
        const snapshot = await getDocs(collection(db, collectionName));
        const data: any[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setState(data);
      } catch (e) {
        console.error("Error getting documents: ", e);
      }
    };

    if (isMounted) {
      getAndSetDocs("products", setProducts);
      getAndSetDocs("categories", setCategories);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`flex flex-col p-4 gap-3 ${className}`} {...rest}>
      <div className="flex flex-col gap-2">
        <h2>Categories</h2>
        <ul className="flex gap-3">
          <CashierProduct
            className="bg-secondary-orange"
            onClick={addNewProduct}
          >
            <BsPlusLg />
            <h3 className="text-md">Add new</h3>
          </CashierProduct>

          {categories.map((category, index) => {
            return (
              <CashierProduct key={index} className="bg-secondary-orange">
                <h5>{category.display_name}</h5>
                <h5>{category.price}</h5>
              </CashierProduct>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Products</h2>
        <ul className="flex gap-3">
          <CashierProduct onClick={addNewProduct}>
            <BsPlusLg />
            <h3 className="text-md">Add new</h3>
          </CashierProduct>

          {products.map((product, index) => {
            return (
              <CashierProduct
                key={index}
                onClick={() => addSelectedProduct(product)}
              >
                <h5>{product.display_name}</h5>
                <h5>{product.price}</h5>
              </CashierProduct>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;

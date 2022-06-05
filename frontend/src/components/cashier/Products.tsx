import { FC, useEffect, useState } from "react";
import { addDoc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../../firebase";
import CashierProduct from "components/butttons/CashierProduct";

const addNewProduct = async ({
  name,
  price,
  description,
}: {
  name: string;
  price: number;
  description: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name,
      price,
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
  const [products, setProducts] = useState<DocumentData[]>([]);

  useEffect(() => {
    let isMounted = true;

    const getAllProducts = async () => {
      try {
        const products = await getDocs(collection(db, "products"));
        setProducts(products.docs);
      } catch (e) {
        console.error("Error getting documents: ", e);
      }
    };

    if (isMounted) {
      getAllProducts();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`flex flex-col ${className}`} {...rest}>
      <ul className="flex gap-3">
        {products.map((product, index) => {
          return (
            <li key={index}>
              <CashierProduct
                name={
                  product._document.data.value.mapValue.fields.name.stringValue
                }
              />
            </li>
          );
        })}
        <CashierProduct name="Add new product" onClick={addNewProduct} />
      </ul>
    </div>
  );
};

export default Products;

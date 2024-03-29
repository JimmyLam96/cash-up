import React from 'react';
import Itemcard from '../components/Itemcard';
import Searchbar from '../components/Searchbar';
import Summary from '../components/Summary';
import { ItemDetails, ItemFetch } from '../../../shared/interfaces/Interfaces';
import '../css/Cashier.css';
import SummaryItem from '../components/SummaryItem';
import { FormProvider } from '../utils/useForm';
import { useOrder } from '../utils/useOrder';
import Categories from '../components/Categories';

function Cashier() {
  const { fetchedCategories, selected, handleSearch, searchItems } = useOrder();

  return (
    <div className="cashier">
      <div className="left">
        <div className="searchbar-container">
          <Searchbar searchTerm={searchItems} handleSearch={handleSearch} />
        </div>
        <div className="categories-container">
          <Categories />
        </div>
        <div className="itemcards-container">
          {fetchedCategories.map((x: ItemFetch) => {
            return (
              <div key={x._id} className="category-container">
                <h1>{x.category}</h1>
                {x.dishes.map((dish: ItemDetails) => {
                  return <Itemcard key={dish._id} details={dish} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <FormProvider>
          <Summary>
            {selected.map((x: { item: ItemDetails; amount: number }) => {
              return (
                <SummaryItem key={x.item._id} item={x.item} amount={x.amount} />
              );
            })}
          </Summary>
        </FormProvider>
      </div>
    </div>
  );
}

export default Cashier;

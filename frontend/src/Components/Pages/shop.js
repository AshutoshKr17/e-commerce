import React from 'react';
import './shop.css';
import FlashCard from '../FlashCard/FlashCard.jsx';
export const Shop = () => {


    // Dummy data for items
   
    const items = [
        {
            id: 1,
            name: 'Item 1',
            price: 20,
            image: 'item1.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 30,
            image: 'item2.jpg'
        }
        // Add more items as needed
    ];

    return (<>
        <div className="shop-container">
            <h2>Lates Collection</h2>
            <div className="items-container">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                        {< div > add to cart </div>}
                    </div>
                ))}
            </div>
        </div>
        <div>
      <h2>FlashCard 1</h2>
      <FlashCard items={items} />
    </div>
        </>
    );
};

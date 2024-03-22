  import React, { useRef } from 'react';
  import './FlashCard.css';
  const FlashCard = ({ items ,incrementCartCount}) => {
      const sliderRef = useRef(null);
    let mouseDown = false;
    let startX, scrollLeft;

    const startDragging = (e) => {
      mouseDown = true;
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    };

    const stopDragging = () => {
      mouseDown = false;
    };

    const handleMouseMove = (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - sliderRef.current.offsetLeft;
      const scroll = x - startX;
      sliderRef.current.scrollLeft = scrollLeft - scroll;
    };
    const addToCart = (itemId) => {
      // Handle adding item to cart here
      incrementCartCount();
      console.log("Item added to cart:", itemId);
    };

    return (
       <div
      id="drag"
      className="scrolling-wrapper container-fluid"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      <div className="card">
        {items.map((item, index) => (
          <div key={index} className="card-item">
            <img src={item.image} alt={item.name} />
            
              <h3>{item.name}</h3>
              <p>Price: ${item.new_price}</p>
              <button onClick={() => addToCart(item.id)}>Add to Cart</button>
            
          </div>
        ))}
      </div>
    </div>
    );
  }

  export default FlashCard;

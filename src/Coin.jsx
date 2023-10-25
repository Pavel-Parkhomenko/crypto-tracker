import React from 'react';
import './Coin.css';

const Coin = ({
                name,
                price,
                symbol,
                marketcap,
                volume,
                image,
                priceChange
              }) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto'/>
          <div className="coin-name">
            <h1 className="w-all">{name}</h1>
            <p className='coin-symbol w-all'>{symbol}</p>
          </div>
        </div>
        <div className='coin-data'>
          <p className='coin-price w-all'>${price}</p>
          <div className="pre-end-box">
            <p className='coin-volume w-all'>${volume.toLocaleString()}</p>
            <div className="end-box">
              {
                priceChange < 0
                  ?
                  (<p className='coin-percent red w-all'>{priceChange?.toFixed(2)}%</p>)
                  :
                  (<p className='coin-percent green w-all'>{priceChange?.toFixed(2)}%</p>)
              }
              <p className='coin-marketcap w-all'>
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
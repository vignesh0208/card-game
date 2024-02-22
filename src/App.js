import React, { useState } from 'react';
import './App.css';

const suits = ['♠️', '♥️', '♦️', '♣️'];
const ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

function App() {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  // Function to generate a standard deck of cards
  const generateDeck = () => {
    const newDeck = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        newDeck.push({ suit, rank });
      }
    }
    return newDeck;
  };

  // Function to shuffle the deck
  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  // Function to draw 5 random cards for each suit
  const drawCards = () => {
    if (deck.length < 20) {
      alert('Not enough cards in the deck!');
      return;
    }

    const shuffledDeck = shuffleDeck([...deck]);
    const newDrawnCards = [];

    for (const suit of suits) {
      const cardsOfSuit = shuffledDeck.filter((card) => card.suit === suit);
      const randomIndices = [];
      while (randomIndices.length < 5) {
        const randomIndex = Math.floor(Math.random() * cardsOfSuit.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
          newDrawnCards.push(cardsOfSuit[randomIndex]);
        }
      }
    }

    setDrawnCards([...newDrawnCards, ...drawnCards]);
    setDeck(shuffledDeck.slice(20));
  };

  // Initialize deck on first render
  useState(() => {
    setDeck(generateDeck());
  }, []);

  return (
    <div className='App'>
      <h1>Card Drawer</h1>
      <button onClick={drawCards}>Draw Cards</button>
      {deck.length === 0 && <p>Deck is empty!</p>}
      <div className='cardGrid'>
        {drawnCards.map((card, index) => (
          <div
            className='card'
            key={index}>
            <p>{card.rank}</p>
            <p>{card.suit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

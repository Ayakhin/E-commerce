// src/pages/Cart.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartProvider } from '../context/CartContext'; // Assurez-vous que le chemin est correct
import Cart from './Cart'; // Assurez-vous que le chemin est correct

// Fonction pour rendre le composant avec le CartProvider
const renderWithProvider = (ui, { ...renderOptions } = {}) => {
  return render(<CartProvider>{ui}</CartProvider>, renderOptions);
};

test('renders cart with items', () => {
  const cartItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 10 },
    { id: 2, name: 'Product 2', quantity: 1, price: 20 },
  ];

  renderWithProvider(<Cart cartItems={cartItems} />);

  // Vérifiez que les produits sont affichés
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
  expect(screen.getByText('Total: 40')).toBeInTheDocument(); // Vérifiez le total
});

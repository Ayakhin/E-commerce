// src/setupTests.js
import { jest } from '@jest/globals';

// Mock `useNavigate` de `react-router-dom`
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(), // Mock `useNavigate` pour qu'il ne fasse rien
}));

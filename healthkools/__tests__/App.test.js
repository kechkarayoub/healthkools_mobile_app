/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux'
jest.mock('react-native-localize', () => ({
  // Mock the methods or properties you need for testing
  getLocales: jest.fn(() => [{ countryCode: 'FR', languageTag: 'fr-FR' }]),
}));

describe('SignUp component', () => {
  test('Should render without crash', async () => {
    await render(
      <App />
    );
  });
});

// Note: import explicitly to use the types shiped with jest.
//import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';


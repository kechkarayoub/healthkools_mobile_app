import App from '../App';
import React from 'react';
import { render } from '@testing-library/react-native';
import 'react-native';

jest.mock('react-native-localize', () => ({
  // Mock getLocales for testing
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


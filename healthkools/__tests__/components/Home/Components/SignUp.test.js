import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignUp from 'src/Components/Home/Components/SignUp';
import { Provider } from 'react-redux'
import Store from 'src/Store/configureStore'
jest.mock('react-native-localize', () => ({
  // Mock the methods or properties you need for testing
  getLocales: jest.fn(() => [{ countryCode: 'FR', languageTag: 'fr-FR' }]),
}));
const current_language = "en";

describe('SignUp component', () => {
  test('Should render without crash', async () => {
    await render(
      <Provider store={Store}>
        <SignUp current_language={current_language} />
      </Provider>
    );
    // const components_errors_by_text = screen.queryAllByText('form_error');
    // expect(components_errors_by_text).toHaveLength(0);
  });
});

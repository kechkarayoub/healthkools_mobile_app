import ErrorComponent from 'src/Components/Common/ErrorComponent';
import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';

describe('ErrorComponent component', () => {
  test('Should render without crash', async () => {
    render(
      <ErrorComponent />
    );
  });
  test('Should contains props data', async () => {
    render(
      <ErrorComponent
        test_id='test_id'
        error={"error"}
      />
    );
    const errors_by_test_id = screen.queryAllByTestId('test_id');
    expect(errors_by_test_id).toHaveLength(1);
    const errors_by_text = screen.queryAllByText('error');
    expect(errors_by_text).toHaveLength(1);
    // screen.debug()

  });
});

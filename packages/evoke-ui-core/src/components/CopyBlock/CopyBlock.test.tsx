import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CopyBlock } from './CopyBlock.component';

afterEach(cleanup);

describe('CopyBlock', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<CopyBlock data-testid="CopyBlockComponent">Foo Bar Baz</CopyBlock>);
    const component = getByTestId('CopyBlockComponent')

    expect(component).toBeInTheDocument();
  });
});
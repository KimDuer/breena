import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from '../../Components/Header'

describe('Header', () => {
    test('renders Header component', () => {
        render(<MemoryRouter><Header /></MemoryRouter>)

        expect(screen.getByText('Growing Up Broken'))
        expect(screen.getByText('a collection of original writing by'))
        expect(screen.getByText('Breena Byerly'))

    })
})
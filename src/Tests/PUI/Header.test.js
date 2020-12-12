import { TestScheduler } from 'jest'
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../Components/Header'

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer
    ReactShallowRenderer.createRenderer(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})
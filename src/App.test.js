import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without errors', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find(`[data-test="component-app"]`)

  expect(wrapper).toBeTruthy()
  expect(appComponent).toHaveLength(1)
})

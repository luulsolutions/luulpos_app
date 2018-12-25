import SearchBar from '../../App/Components/SearchBar'
import PosContext from '../../App/Containers/POS/PosContext'
import React from 'react'

jest.mock(SearchBar, () => {
  const ThemeProvider = require.requireActual('../../App/Containers/POS/PosContext')
  const theme = require.requireActual('../../App/Components/SearchBar')

  return {
    ThemeProvider,
    ThemeConsumer: (props) => props.children({ theme })
  }
})

test('Should find the Text component', () => {
  const wrapper = shallow(<SearchBar />)

  expect(wrapper.find('ThemeConsumer').dive().find('[searchTerm]').length).toEqual(1)
})

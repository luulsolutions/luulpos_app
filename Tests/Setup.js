import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Config from '../App/Config/DebugConfig'

Config.useReactotron = false
configure({ adapter: new Adapter() })

// Mock your external modules here if needed
jest
  .mock('react-native-navigation', () => {
    return { Navigation: { showModal: jest.fn((url) => { return [] }) } }
  })

console.tron = { log: () => {}, display: () => {} }

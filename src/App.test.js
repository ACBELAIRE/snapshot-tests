import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

    //set variable "tree" to renderer.create 
   //renderer.create will render the element and create an output that contains toJSON method.
  //the call toJSON() Turns the component representation into JSON.. MAKES EASIER TO SAVE AS A SNAPSHOT and compare to others
 // last line compares new snapshot to the saved one (if it exists)
  

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
});

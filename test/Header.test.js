import { shallow } from 'enzyme';
import Header from '../src/components/Header';

describe('<Header />', () => {
  it('should render one <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
});
});
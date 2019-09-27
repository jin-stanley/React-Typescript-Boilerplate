import * as React from 'react';
import {shallow} from 'enzyme';

import HelloWorld from './index';

it('renders the heading', () => {
    const result = shallow(<HelloWorld />).contains(<h1>Hello World</h1>);
    expect(result).toBeTruthy();
});

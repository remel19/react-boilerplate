import React from 'react';
import { shallow } from 'enzyme';

import { App } from 'components/App';

describe('Test for main index file', () => {
    const wrapper = shallow(<App />);
    it('Should render without exploading', () => {
        expect(wrapper).toHaveLength(1);
    });
});

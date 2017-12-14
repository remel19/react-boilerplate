// test-setup.js

/* eslint-disable */
import raf from './shim';
/* eslint-enable */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//configuring enzyme test framework
configure({ adapter: new Adapter() });

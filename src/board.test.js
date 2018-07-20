import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Board from './Board';
import sinon from 'sinon';
const sinon_chai = require('sinon-chai');

chai.use(sinon_chai);

let expect = chai.expect


describe('<Board />', () => {
    it('renders', () => {
        const squares = Array(9)
        const wrapper = shallow(<Board squares={squares}/>);
        expect(wrapper.find('Square')).to.have.length(9)
    });

    it('clicks when square clicks', () => {
        const squares = Array(9)
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Board squares={squares} onClick={onButtonClick}/>);
        
        wrapper.find('Square').at(5).simulate('click');
        expect(onButtonClick).to.have.been.calledWithExactly(5);
    });
})
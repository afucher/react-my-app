import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Game from './Game';
let expect = chai.expect


describe('</Game />', () => {
    it('renders', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.find('Board')).to.have.length(1)
    });

    it('has one history on start', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('history')).to.have.length(1)
    })

    it('starts with xIsNext', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('xIsNext')).to.be.true
    })

    it('starts with stepNumber as 0', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('stepNumber')).to.be.equal(0)
    })
})

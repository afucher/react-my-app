import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Square from './Square';
import sinon from 'sinon';

describe('<Square />', () => {
  it('renders', () => {
    const wrapper = shallow(<Square value='X'/>);
    expect(wrapper.find('button').text()).to.be.equal('X')
  });

  it('clicks', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Square onClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  })
});
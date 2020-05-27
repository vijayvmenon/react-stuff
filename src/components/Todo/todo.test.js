import React from 'react';
import { shallow } from 'enzyme';
import ToDoApp from "./todo";

const add = (a,b) => a+b;

test('should add two numbers',() => {
    const sum = add(3,4);
    expect(sum).toBe(7);
});

test("it should render Todo Component",() => {
    const wrapper = shallow(<ToDoApp />);
    expect(wrapper).toMatchSnapshot();
})
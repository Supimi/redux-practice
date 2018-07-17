import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', ()=> {
    it('sets error message when trying to save empty title',() =>{
        const wrapper = mount(<ManageCoursePage authors={[]}/>);
        const saveButton = wrapper.find('input').last();
    });
})

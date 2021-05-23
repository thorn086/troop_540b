import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure} from 'enzyme'
import NavBar from './NavBar'

configure({adapter: new Adapter()})

describe('NavBar',()=>{
    const navBar = shallow(<NavBar />)
    it('properly renders', ()=>{
        expect(navBar).toMatchSnapshot()
    })
})
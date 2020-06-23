import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageItem from '../components/ImageItem';

Enzyme.configure({ adapter: new Adapter() })

describe('ImageItem test', () => {
    it('should render the ImageItem component', () => {
        const props = {
            "imageUrl": "https://carousels.s3.us-east-2.amazonaws.com/6f4df6fd-0be0-400c-a5a4-4fea34c78504.jpg",
            "type": "Entire house",
            "bed": 2,
            "title": "tempora aut nemZ",
            "price": 122
        };
        const wrapper = shallow(<ImageItem room={props}/>);
        expect(wrapper.exists()).toBe(true);
    });
})

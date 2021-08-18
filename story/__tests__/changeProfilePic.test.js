import 'react-native';
import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import ChangeProfilePic from './../components/changeProfilePic';
import ImagePicker from 'react-native-image-crop-picker';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import { UPLOAD_IMAGE_PATH } from '../graphql/mutation';

jest.useFakeTimers()

const mockedParams = {
    route: {
        params: {
            imagePath: './../images/no_profile_pic.jpeg'
        }
    },
    navigation: {
        navigate: jest.fn()
    }
}

const mock = [
    {
        request:{
            query: UPLOAD_IMAGE_PATH,
            variable: {
                id: 1,
                path: './abs/sks.jpeg'
            }
        },
        result: {
            data: "image path uploaded"
        } 
    }
]



it('renders correctly', () => {
    const tree = renderer.create(
        <MockedProvider addTypename={false} mocks={mock}>
            <ChangeProfilePic {...mockedParams}/>
        </MockedProvider>
    )
})

it('snapshot', () => {
    const tree = renderer.create(
        <MockedProvider addTypename={false} mocks={mock}>
            <ChangeProfilePic {...mockedParams}/>
        </MockedProvider>
    )
    expect(tree).toMatchSnapshot()
})

describe('buttons', () => {
    const tree = renderer.create(
        <MockedProvider addTypename={false} mocks={mock}>
            <ChangeProfilePic {...mockedParams}/>
        </MockedProvider>
    )

    it('gallery', () => {
        const btn = tree.root.findByProps({testID: 'gallery'}).props;
        btn.onPress();

        expect(ImagePicker.openPicker).toHaveBeenCalled()
    })

    it('camera', () => {
        const btn = tree.root.findByProps({testID: 'camera'}).props;
        btn.onPress();

        expect(ImagePicker.openCamera).toHaveBeenCalled()
    })
    it('upload', () => {
        const btn = tree.root.findByProps({testID: 'upload'}).props;
        btn.onPress();

        expect(mockedParams.navigation.navigate).toHaveBeenCalledWith(expect.objectContaining({name:'Home'}))
    })
})


it('image display', async () => {
    const tree = renderer.create(
        <MockedProvider addTypename={false} mocks={mock}>
            <ChangeProfilePic {...mockedParams}/>
        </MockedProvider>
    )

    const btn = tree.root.findByProps({testID:'gallery'}).props;
    await act( async () => {
        await btn.onPress();
    })

    const img = tree.root.findByProps({testID:'picture'});
    expect(img).not.toBeNull()
})


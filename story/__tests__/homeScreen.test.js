import 'react-native';
import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import HomeScreen from '../components/homeScreen';
import { USER_DETAILS } from './../graphql/query';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import wait from "waait"
import { GraphQLError } from 'graphql';


const mockedParams = {
	route: {
		params: {
			available: true,
			viewed: true,
		}
	},
	navigation: {
		navigate: jest.fn()
	}
}

const tree = renderer.create(
	<MockedProvider>
		<HomeScreen {...mockedParams} />
	</MockedProvider>
)

it("snapshot", () => {
	expect(tree).toMatchSnapshot();
});

it("text feilds", () => {
	expect(tree.root.findAllByType("Text").length).toBe(3);
})

describe('navigation', () => {
	it("navigate to add story screen", () => {
		const btn = tree.root.findByProps({ testID: 'addBtn' }).props;
		btn.onPress();

		expect(mockedParams.navigation.navigate).toHaveBeenCalledWith(expect.objectContaining({ name: 'AddStory' }));
	});

	it("navigate to story screen", () => {
		const btn = tree.root.findByProps({ testID: 'image' }).props;
		btn.onPress();

		expect(mockedParams.navigation.navigate).toBeCalledWith("Story");
	});

	it('navigate to change profile pic screen', () => {
		const btn = tree.root.findByProps({ testID: 'image' }).props;
		btn.onLongPress();

		expect(mockedParams.navigation.navigate).toBeCalledWith(expect.objectContaining({ name: 'ChangeProfilePic' }))
	})
})

describe("text", () => {
	// beforeEach(() => {
	//     jest.setTimeout(10000);
	// });

	// beforeAll((done /* Call it or remove it */) => {
	//     done(); // Calling it
	// });

	afterAll(() => {
		jest.clearAllTimers()
	})

	it("render loading state", () => {
		const component = renderer.create(
			<MockedProvider>
				<HomeScreen {...mockedParams} />
			</MockedProvider>
		);

		const name = component.root.findByProps({ testID: 'nameDisplay' }).props
		expect(name.children).toEqual('loading');

		const bio = component.root.findByProps({ testID: 'bioDisplay' }).props
		expect(bio.children).toEqual('loading');
		// done()
	});

	it("render data state", async () => {
		const mock = [
			{
				request: {
					query: USER_DETAILS,
					variables: {
						id: 1
					}
				},
				result: () => {
					console.log('this ran!')
					return {
						data: {
							getUserDetails: {
								name: "Byung ho",
								bio: "Photographer",
								image_path: "file:///storage/emulated/0/Android/data/com.story/files/Pictures/3d8ffa05-c1cb-4809-9d4c-48b7b81b9516.jpg"
							}
						}
					}
				}
			}
		]

		const component = renderer.create(
			<MockedProvider
				mocks={mock}
				addTypename={false}
			>
				<HomeScreen {...mockedParams} />
			</MockedProvider>
		);

		console.log('here', component.toJSON())

		// await wait(100);
		await new Promise(resolve => setTimeout(resolve, 100));

		console.log('not here', component.toJSON())



		const name = component.root.findByProps({ testID: 'nameDisplay' }).props
		expect(name.children).toEqual('Byung ho');

		const bio = component.root.findByProps({ testID: 'bioDisplay' }).props
		expect(bio.children).toEqual('Photographer');

	})

	it('render error state', async () => {
		const mock = [
			{
				request: {
					query: USER_DETAILS,
					variables: { id: 1 }
				},
				error: new Error('erroe'),
			}
		]

		const component = renderer.create(
			<MockedProvider mocks={mock} addTypename={false}>
				<HomeScreen {...mockedParams} />
			</MockedProvider>
		);

		await wait(1000);
		const name = component.root.findByProps({ testID: 'nameDisplay' }).props
		expect(name.children).toEqual('Error');


		const bio = component.root.findByProps({ testID: 'bioDisplay' }).props
		expect(bio.children).toEqual('Error');

	})
})

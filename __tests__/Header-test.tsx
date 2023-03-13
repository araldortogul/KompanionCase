import { fireEvent, render, screen } from '@testing-library/react-native';
import Header from '../src/components/organisms/Header';


describe("Header", () => {
    let props: any
    let underTest: JSX.Element
    beforeAll(() => {
        props = { navigation: {push: jest.fn(), pop: jest.fn(), route: null } }
        underTest = <Header {...props}/>
    })
    beforeEach(() => {    
        render(underTest)
    })

    it("back button should navigate back", async () => {
        const backButton = await screen.findByTestId("back-button")

        fireEvent.press(backButton)
        expect(props.navigation.pop).toHaveBeenCalled();
    })
    it('search button should navigate to search screen', async () => {
        const searchButton = await screen.findByTestId("search-button")

        fireEvent.press(searchButton)
        expect(props.navigation.push).toHaveBeenCalled();
        
    })
    it("should render username/email and password fields", async () => {
        const textInput = await screen.findByPlaceholderText("Search for posts...")

        fireEvent(textInput, "onSubmitEditing")
        expect(props.navigation.push).toHaveBeenCalled();
    })

})
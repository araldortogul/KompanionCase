import 'react-native';
import React from 'react';

import LoginFields from '../src/components/organisms/LoginFields';
import LoginScreen from '../src/scenes/LoginScreen';
import Button from '../src/components/atoms/Button';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe("Login Screen", () => {
    let props: any
    let underTest: JSX.Element
    beforeAll(() => {
        props = { navigation: {push: jest.fn(), route: null } }
        underTest = <LoginScreen {...props}/>
    })
    beforeEach(() => {
        render(underTest)
    })
    it("should render login button", async () => {
        const loginButton = screen.root.findByType(Button)
        expect(loginButton.props).toHaveProperty("title", "Log In")
    })
    it('button should handle login', async () => {
        const loginButton = await screen.findByTestId("loginButton")

        fireEvent.press(loginButton)
        expect(props.navigation.push).toHaveBeenCalledWith("Feed");
    })
    it("should render username/email and password fields", async () => {
        screen.root.findByType(LoginFields)
    })

})
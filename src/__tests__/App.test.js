import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm ______`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1
    })
    expect(topLevelHeading).toBeInTheDocument();
});

// Test that a portfolio image is present

test("displays a portfolio image", () => {
    render(<App />)
    const portfolioImage = screen.getByAltText("Portfolio image", {
        exact: false,
    })
    expect(portfolioImage).toBeInTheDocument();
})

// Test about me heading
test("displays a second-level heading with the text `About me`", () => {
    render(<App />)
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2
    })
    expect(secondLevelHeading).toBeInTheDocument();
})

// Test about me paragraph
test("displays a paragraph with the text `I'm a software engineer who loves to code`", () => {
    render(<App />)
    const paragraph = screen.getByText(/I'm a software engineer who loves to code/i)
    expect(paragraph).toBeInTheDocument();
})

// Test github link is present
test("displays a link to my GitHub profile", () => {
    render(<App />)
    const githubLink = screen.getByRole("link", {
        name: /github/i,
        exact: false
    })
    expect(githubLink).toBeInTheDocument();
})

// Test linkdln link is present
test("displays a link to my LinkedIn profile", () => {
    render(<App />)
    const linkedInLink = screen.getByRole("link", {
        name: /linkedin/i,
        exact: false
    })
    expect(linkedInLink).toBeInTheDocument();
})

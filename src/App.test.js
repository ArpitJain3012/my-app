import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { createMemoryHistory } from 'history';
import AddUsers from './components/AddUsers';
import { Router } from 'react-router-dom';



//Test for Navbar componenet----------------------------------------------------------------------------

describe("Test the Navbar Component", () => {
  test("render the navbar with home Link", () => {

    const { getByTestId } = render(<App />);
    expect(getByTestId("home")).toHaveTextContent("Home");
  });
  test("render the navbar with about Link", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("about")).toHaveTextContent("About");
  });
  test("render the navbar with button content add user", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("btn")).toHaveTextContent("Add User");
  });
  it("Renders with a className navbar-brand equal to the variant", () => {
    const { container } = render(<App variant="navbar-brand" />);
    expect(container.getElementsByClassName("navbar-brand").length).toBe(1);
  });
  it("Renders with a className navbar-toggle equal to the variant", () => {
    const { container } = render(<App variant="navbar-toggler" />);
    expect(container.getElementsByClassName("navbar-toggler").length).toBe(1);
  });

});


//Test for About componenet----------------------------------------------------------------------------

describe("Test the About Component", () => {
  test("render the component with heading about", () => {
    render(<App />)
    const headings = screen.getByText("About")
    expect(headings).toBeInTheDocument();
  });

});

//Test for Add user componenet----------------------------------------------------------------------------
//describe("Test the Add User Component", () => {
  // const renderWithRouter = (component) => {
  //   const history = createMemoryHistory()
  //   return {
  //     ...render(
  //       <Router history={history}>
  //         {component}
  //       </Router>
  //     )
  //   }
  // }
  // test('should render the Add User page', () => {
  //   const { container } = render(<App variant="addUser" />);
  //   expect(container.getElementsByClassName("addUser").length).toBe(1);
  //   const { container, getByTestId } = renderWithRouter(<AddUsers />) 
  //   const heading = getByTestId('userHead')
   
  //  expect(container.innerHTML).toMatch('Add User');
  //   expect(heading).toHaveTextContent("Add User");
  //})
  // test("render the Add User component with label name", () => {

  //   const { getByTestId } = render(<App />);
  //   expect(getByTestId("addName")).toHaveTextContent("Name");
  // });
  // test("render the Add User component with label Email", () => {

  //   const { getByTestId } = render(<App />);
  //   expect(getByTestId("addEmail")).toHaveTextContent("Email Address");
  // });
  // test("render the Add User component with label Username", () => {

  //   const { getByTestId } = render(<App />);
  //   expect(getByTestId("addUserName")).toHaveTextContent("User Name");
  // });
  // test("render the Add User component with label Mobile", () => {

  //   const { getByTestId } = render(<App />);
  //   expect(getByTestId("addMobile")).toHaveTextContent("Mobile Number");
  // });
  // test("render the Add User component with button add user", () => {

  //   const { getByTestId } = render(<App />);
  //   expect(getByTestId("addUser")).toHaveTextContent("Add User");
  // });

//});
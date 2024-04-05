import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact Us test cases", () =>{

  beforeAll(() =>{
    console.log("before all");
  });

  afterAll(()=>{

  });

  beforeEach(()=>{
    console.log("before each");
  });
  afterEach(()=>{

  });
    it('Should load contact us component', () => {
      render(<Contact />);

      const heading = screen.getByRole('heading');

      //Assertion
      expect(heading).toBeInTheDocument();
    });

    test('Should load button inside Contact component', () => {
      render(<Contact />);

      const button = screen.getByRole('button');

      //Assertion
      expect(button).toBeInTheDocument();
    });

    it('Should load input name inside Contact component', () => {
      render(<Contact />);

      const inputname = screen.getByPlaceholderText('name');
      expect(inputname).toBeInTheDocument();
    });

    test('Should load 2 input boxes in the Contact component', () => {
      render(<Contact />);

      //Querying
      //when  there are multiple elements we use getAllByRole - All
      const inputBoxes = screen.getAllByRole('textbox');

      //Assertion
      expect(inputBoxes.length).toBe(2);
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../Components/Profile/Post";
import SignIn from "../Components/Auth/SignIn";
describe("post show", () => {
  test("post component", () => {
    render(
      <Router>
        <Post />
      </Router>
    );
    const linkElement = screen.getByText(/Publish/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("signup show", () => {
    render(
      <Router>
        <SignIn />
      </Router>
    );
    const linkElement = screen.getByText(/First Name/i);
    expect(linkElement).toBeInTheDocument();
  });
 
});

// describe('Post component', () => {
//   test('renders correctly', () => {

//     const { getByText, getByPlaceholderText } = render(<Post />);
//     expect(getByText('Publish')).toBeInTheDocument();
//     expect(getByPlaceholderText('Title')).toBeInTheDocument();
//     expect(getByPlaceholderText('write a post ...')).toBeInTheDocument();
//   });

//   test('uploading image works correctly', () => {
//     const { getByText, getByLabelText } = render(<Post />);
//     fireEvent.click(getByText('+'));
//     const input = getByLabelText('upload-image');
//     fireEvent.change(input, { target: { files: [new File(['test'], 'test.png', { type: 'image/png' })] } });
//     expect(input.files[0]).toBeDefined();
//   });

//   test('uploading video works correctly', () => {
//     const { getByText, getByLabelText } = render(<Post />);
//     fireEvent.click(getByText('+'));
//     const input = getByLabelText('upload-video');
//     fireEvent.change(input, { target: { files: [new File(['test'], 'test.mp4', { type: 'video/mp4' })] } });
//     expect(input.files[0]).toBeDefined();
//   });
// });

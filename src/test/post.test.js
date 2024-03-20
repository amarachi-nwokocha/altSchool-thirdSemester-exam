
// import { render, fireEvent } from '@jest/react';
// import '@jest/jest-dom/extend-expect';
// import Post from './Post';

// describe('Post component', () => { 

  
//  })

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

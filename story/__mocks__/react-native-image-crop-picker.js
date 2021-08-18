const result = {
    path:'./../images/abc.jpeg',
    cropRect: {
        width: 300,
        height: 300
    }
}

export default ImagePicker = {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve(result)),
    openCamera: jest.fn().mockImplementation(() => Promise.resolve(result))
};
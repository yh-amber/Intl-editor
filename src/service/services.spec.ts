import apis from './services';

describe('services', () => {
  it('should get all data successfully', async () => {
    // const getAllMock = jest.spyOn(service, 'getAll');
    // const getAllMock = jest.fn();

    // getAllMock.mockImplementation(() => Promise.resolve('message'));

    const data = await apis.getAll('/intl/all');

    // expect(getAllMock).toEqual('message')
  })
})
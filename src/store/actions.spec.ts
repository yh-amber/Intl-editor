import apis from '../service/services';
import { initBoardData, onEditMessage, onDeleteRowData, onConfirmChange, onLeaveChange } from './actions';

describe('actions', () => {
  it('should get return properly for initBoardData', async () => {
    const getAllMock = jest.spyOn(apis, 'getAll');

    getAllMock.mockImplementation((path) => Promise.resolve('message'));

    const mockCommit = jest.fn((fName, value) => value);

    await initBoardData({ commit: mockCommit });

    expect(mockCommit).toBeCalledWith('setContents', 'message')
  })
})
import apis from '../service/services';

export async function initBoardData(context: any) {
  const result = await apis.getAll('/intl/all');

  context.commit('setContents', result)
}

export function onEditMessage(context: any, data: any) {
  context.commit('setEditingMessage', data)
}

export async function onDeleteRowData(context: any, mid: string) {
  await apis.deleteMessageById(`/intl/delete/${mid}`);

  initBoardData(context);
}

export async function onConfirmChange(context: any) {
  const { contents, editingId, editingValues } = context.state;

  const initData = contents[editingId] || {};

  const editingData: any = {};

  for (const key in editingValues) {
    if (editingValues[key] !== initData[key]) {
      editingData[key] = editingValues[key];
    }
  }

  if (Object.keys(editingData).length > 0) {
    editingData.id = editingId;

    await apis.modifyMessageById('/intl/edit', editingData);
    initBoardData(context);
  }

  context.commit('completeModification');
}

export function onLeaveChange(context: any) {
  context.commit('castOffChange')
}

import apis from '../service/services';

export async function initBoardData(context: any) {
  const result = await apis.getAll('/intl/all');

  context.commit('setContents', result)
}

export function onEditMessage(context: any, data: any) {
  context.commit('getEditingMessage', data)
}

export function onConfirmChange(context: any) {
  console.log('--------------', context);
  context.commit('completeModification')
}

export function onLeaveChange(context: any) {
  context.commit('castOffChange')
}
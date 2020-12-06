
import { getAll } from '../service/services';

export async function initBoardData(context: any) {

    const result = await getAll('/intl/all');

    console.log('------------', result);

    context.commit('setContents', result)
}
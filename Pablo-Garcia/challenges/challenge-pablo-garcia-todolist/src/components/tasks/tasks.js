import { store } from '../../common/store/store.js';
import { showTaskList } from '../listing/listing.js'

export const createTasks = () => {
    showTaskList(store.tasks);
    store.onStoreChange((tasks) => {
        showTaskList(tasks);
    });
}

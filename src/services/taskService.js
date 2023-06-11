const Task = require('../models/task');
const aqp = require('api-query-params');

module.exports = {
    postTask: async (data) => {
        if (data.type === 'EMPTY-TASK') {
            let result = await Task.create(data);
            return result;
        }

    },
    getTask: async (queryString) => {
        if (queryString.limit && queryString.page) {
            let page = queryString.page;
            let { filter, limit } = queryString;
            delete filter.page;
            let skip = (page - 1) * limit;
            let result = await Task.find(filter).skip(skip).limit(limit);
            return result;
        } else {
            return await Task.find({});
        }
    },
    putTask: async (taskData) => {
        let result = await Task.updateOne({ _id: taskData.id }, { ...taskData });
        return result;
    },
    deleteTask: async (id) => {
        let result = await Task.deleteById(id);
        return result;
    }
}
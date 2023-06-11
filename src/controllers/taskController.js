const { postTask, getTask, putTask, deleteTask } = require('../services/taskService')


module.exports = {
    postTaskAPI: async (req, res) => {
        let result = await postTask(req.body);
        return res.status(200).json({
            errCode: 0,
            data: result
        })
    },

    getTaskAPI: async (req, res) => {
        let result = await getTask(req.query);
        return res.status(200).json({
            errCode: 0,
            data: result
        })
    },

    putTaskAPI: async (req, res) => {
        let result = await putTask(req.body);
        return res.status(200).json({
            errCode: 0,
            data: result
        })
    },

    deletetaskAPI: async (req, res) => {
        let result = await deleteTask(req.body.id);
        return res.status(200).json({
            errCode: 0,
            data: result
        })
    },
}
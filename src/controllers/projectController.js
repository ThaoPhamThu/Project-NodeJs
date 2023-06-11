const { createProject, getProject, putProject, deleteProject } = require('../services/projectService');


module.exports = {
    postProjectAPI: async (req, res) => {
        let data = req.body;
        let project = await createProject(data);
        return res.status(200).json({
            errCode: 0,
            data: project
        })
    },

    getProjectAPI: async (req, res) => {
        let result = await getProject(req.query);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    },

    putProjectAPI: async (req, res) => {
        let result = await putProject(req.body);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    },

    deleteProjectAPI: async (req, res) => {
        let result = await deleteProject(req.body.id);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    }
}
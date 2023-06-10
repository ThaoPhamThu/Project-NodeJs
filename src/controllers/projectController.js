const { createProject } = require('../services/projectService');


module.exports = {
    postProjectAPI: async (req, res) => {
        let data = req.body;
        let project = await createProject(data);
        return res.status(200).json({
            errCode: 0,
            data: project
        })
    }
}
const Project = require('../models/project');

module.exports = {
    createProject: async (data) => {
        if (data.type === 'EMPTY-PROJECT') {
            let result = await Project.create(data);
            return result;
        }

        if (data.type === 'ADD-USERS') {
            // find project by ID
            let myProject = await Project.findById(data.projectId);
            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.push(data.usersArr[i]);
            }
            let result = await myProject.save();
            return result;
        }

        return null;
    }
}
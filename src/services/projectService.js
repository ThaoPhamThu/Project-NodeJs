const Project = require('../models/project');
const aqp = require('api-query-params');
const mongoose_delete = require('mongoose-delete');

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
        if (data.type === 'REMOVE-USERS') {
            // find project by ID
            let myProject = await Project.findById(data.projectId);
            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.pull(data.usersArr[i]);
            }
            let result = await myProject.save();
            return result;
        }

        if (data.type === 'ADD-TASKS') {
            let myProject = await Project.findById(data.projectId);
            for (let i = 0; i < data.taskArr.length; i++) {
                myProject.tasks.push(data.taskArr[i]);
            };
            let result = await myProject.save();
            return result;
        }

        if (data.type === 'REMOVE-TASKS') {
            let myProject = await Project.findById(data.projectId);
            for (let i = 0; i < data.taskArr.length; i++) {
                myProject.tasks.pull(data.taskArr[i])
            };
            let result = await myProject.save();
            return result;
        }

        return null;
    },

    getProject: async (queryString) => {
        const page = queryString.page;
        let { filter, limit, population } = aqp(queryString);
        const skip = (page - 1) * limit;
        delete filter.page;
        let data = await Project.find(filter).populate(population).skip(skip).limit(limit);;
        return data;
    },

    putProject: async (projectData) => {
        try {
            let data = await Project.updateOne({ _id: projectData.id }, { ...projectData });
            return data;
        } catch (error) {
            return null
        }
    },

    deleteProject: async (id) => {
        try {
            let data = await Project.deleteById(id);
            return data;
        } catch (error) {
            return null;
        }
    }
}
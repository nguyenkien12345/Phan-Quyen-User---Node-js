const coursesController = {
    getList: (req, res, next) => {
        return res.send("GET LIST STUDENTS");
    },

    accessCourse: (req, res, next) => {
        return res.send("YOU HAVE ACCESS TO THIS COURSE");
    }
};

module.exports = coursesController;
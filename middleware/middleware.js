const { users } = require('../data');

const findUser = (userId) => {
    return users.find(user => user.id === userId);
}

// permission là 1 mảng chứa các role được quyền truy cập những route nào đó
const middleware = {
    checkUserExists: () => {
        return (req, res, next) => {
            const { userId } = req.body;
            // Nếu người dùng không truyền lên userId
            if (!userId) {
                return res.status(403).json('You need to sign in');
            }
            // Lấy ra thông tin người dùng
            const user = findUser(userId);
            // Nếu người dùng không tồn tại
            if (!user) {
                return res.status(403).json('User not found');
            }
            // Trả về người dùng
            req.user = user;
            next();
        }
    },

    checkGetList: (permission) => {
        return (req, res, next) => {
            // Lấy ra role của người dùng đó thông qua middleware checkUserExists
            const { role } = req.user;
            // Kiểm tra quyền của người dùng 
            if (!permission.includes(role)) {
                return res.status(401).json('You do not have permission to do that');
            }
            next();
        }
    },

    checkAccessCourse: () => {
        return (req, res, next) => {
            // Lấy ra khóa học mà người dùng yêu cầu truy cập
            const { number } = req.params;
            // Lấy ra các khóa học của người dùng đó thông qua middleware checkUserExists
            const { courses } = req.user;
            // Kiểm tra xem khóa học mà người dùng yêu cầu truy cập có nằm trong danh sách các khóa học mà người dùng đã đăng ký chưa. + là ép kiểu về number
            if (!courses.includes(+number)) {
                return res.status(401).json('You do not have permission to do that');
            }

            next();
        }
    }
}

module.exports = middleware;
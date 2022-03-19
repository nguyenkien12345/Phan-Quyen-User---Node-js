const roles = ["ADMIN", "MODERATOR", "STUDENT"];
const users = [
    { id: 1, name: "Nguyễn Trung Kiên", courses: [1, 2, 3], role: "ADMIN" },
    { id: 2, name: "Nguyễn Hồng Quân", courses: [1, 2, 4], role: "MODERATOR" },
    { id: 3, name: "Nguyễn Đức Công Khoa", courses: [4, 5, 8], role: "STUDENT" },
    { id: 4, name: "Phạm Long Hải", courses: [1, 3, 4], role: "STUDENT" },
    { id: 5, name: "Ngô Nguyễn Phong My", courses: [1, 5, 6], role: "MODERATOR" },
    { id: 6, name: "Lê Quang Huy", courses: [2, 5, 9], role: "STUDENT" },
]

module.exports = {
    roles,
    users
}
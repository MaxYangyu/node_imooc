const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: 'test',
            content: '测试',
            createtTime: 11111111111,
            author: 'yangyu'
        },
        {
            id: 2,
            title: 'test',
            content: '测试',
            createtTime: 11111111111,
            author: 'yangyu'
        }
    ]
};

const getDetail = (id) => {
    return [
        {
            id: 1,
            title: 'test',
            content: '测试',
            createtTime: 11111111111,
            author: 'yangyu'
        }
    ]
};

const newData = (blogData = {}) => {
    return {
        id: 3
    }
};

const updateBlog = (id, blogData = {}) => {
    return true
};

const delBlog = (id) => {
    return true
}
module.exports = {
    getList,
    getDetail,
    newData,
    updateBlog,
    delBlog
};
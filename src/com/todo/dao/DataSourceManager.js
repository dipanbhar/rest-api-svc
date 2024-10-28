const dataSource = process.env.dataSource??"localStorage";
const todoDao = await import('./'+dataSource+'/TodoImpl.js');
const todo = todoDao.default;
export default todo;
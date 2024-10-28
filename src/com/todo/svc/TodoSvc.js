import express from 'express'
import svcPtImpl from '../../../common/todo/dao/localStorage/TodoLocalStorageImpl.js';
const svcRouter = express.Router();

svcRouter.get('/getAllTodo', function (req, res) {
   var allSvcPt = svcPtImpl.getAllSvcPt();
   res.json({ svcPts: allSvcPt });
});

svcRouter.get('/deleteAllTodo', function (req, res) {
   var allSvcPt = svcPtImpl.getAllSvcPt();
   res.json({ svcPts: allSvcPt });
});

svcRouter.get('/deleteTodo/:id', function (req, res) {
   var allSvcPt = svcPtImpl.getAllSvcPt();
   res.json({ svcPts: allSvcPt });
});

svcRouter.get('/updateTodo/:id', function (req, res) {
   var allSvcPt = svcPtImpl.getAllSvcPt();
   res.json({ svcPts: allSvcPt });
});

export default svcRouter;

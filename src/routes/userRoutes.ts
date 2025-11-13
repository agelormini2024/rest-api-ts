import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

<<<<<<< HEAD
router.route('/')
    .get(getUsers)
    .post(createUser);
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
=======
router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

export default router;

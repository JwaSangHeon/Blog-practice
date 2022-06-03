import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObjected, postsCtrl.read);
posts.delete('/:id', postsCtrl.checkObjected, postsCtrl.remove);
posts.patch('/:id', postsCtrl.checkObjected, postsCtrl.update);

export default posts;

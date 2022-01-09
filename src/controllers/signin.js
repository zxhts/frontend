// 引入模板
import signinTpl from '../views/signin.art';
const htmlSignin = signinTpl({});

const _handleSubmit = (router) => {
  return (e) => {
    e.preventDefault();
    router.go('/index');
  }
}



const signin = (router) => {
  return (req, res, next) => {
    res.render(htmlSignin);
    $('#signin').on('click', _handleSubmit(router));
  }
}

export default signin;

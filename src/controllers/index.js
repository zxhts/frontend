import indexTpl from '../views/index.art';

const htmlIndex = indexTpl({});

const index = (router) => {
  return (req, res, next) => {
    res.render(htmlIndex);
    // window resize, 让页面撑满屏幕
    $(window, '.wrapper').resize();
  }
};

export default index;
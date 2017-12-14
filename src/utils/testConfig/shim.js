//this file gets ride of the console.warning when executing tests.
const raf = global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

export default raf;

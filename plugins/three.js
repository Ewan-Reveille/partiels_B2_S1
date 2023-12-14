if (process.client) {
    window.THREE = THREE;
  }
  
  export default ({ app }, inject) => {
    inject('three', THREE);
  };
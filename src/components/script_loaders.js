require('babel-polyfill');


const default_params = {
  src: '',
  async: true, 
  defer: true, 
  crossorigin: 'anonymous', 
  integrity: ''
}
// Load Google API in script tag and append 
const loadScript = async (p) => {
  p = Object.assign(default_params,p)
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = p.src;
    // script.async = p.async;
    // script.defer = p.defer;
    script.crossorigin = p.crossorigin
    script.integrity = p.integrity
    script.addEventListener('load', function() {
      resolve();
    });
    script.addEventListener('error', function(e) {
      console.log(e)
      reject(e);
    });
    document.body.appendChild(script);
  });
}


export {
  loadScript
}
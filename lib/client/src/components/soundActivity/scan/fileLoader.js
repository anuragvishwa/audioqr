(function() {
  //three JS files that need to be loaded one after the other
  var libs = [
    "../src/components/soundActivity/scan/quiet.js",
    "../src/components/soundActivity/scan/receivetext.js",
    "../src/components/soundActivity/scan/sendtext.js",
    "../src/components/soundActivity/scan/quiet-emscripten.js"
  ];

  var injectLibFromStack = function() {
    if (libs.length > 0) {
      //grab the next item on the stack
      var nextLib = libs.shift();
      var headTag = document.getElementsByTagName("head")[0];

      //create a script tag with this library
      var scriptTag = document.createElement("script");
      scriptTag.src = nextLib;

      //when successful, inject the next script
      scriptTag.onload = function(e) {
        //   console.log("---> loaded: " + e.target.src);
        injectLibFromStack();
      };

      //append the script tag to the <head></head>
      headTag.appendChild(scriptTag);
      // console.log("injecting: " + nextLib);
    } else return;
  };

  //start script injection
  injectLibFromStack();
})();

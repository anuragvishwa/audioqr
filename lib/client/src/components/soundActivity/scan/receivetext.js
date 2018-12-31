/* Copyright 2016, Brian Armstrong
 * quiet.js includes compiled portions from other sources
 *  - liquid DSP, Copyright (c) 2007-2016 Joseph Gaeddert
 *  - libjansson, Copyright (c) 2009-2016 Petri Lehtinen
 *  - emscripten, Copyright (c) 2010-2016 Emscripten authors
 */

//Starting Receivetext.js
var TextReceiver = (function() {
  console.log("In TextReceiver function");
  Quiet.init({
    profilesPrefix: "/",
    memoryInitializerPrefix: "/",
    libfecPrefix: "/"
  });
  var target;
  var content = new ArrayBuffer(0);
  var warningbox;

  function validateReceived(receivedText) {
    var str = String(receivedText);
    console.log(str.length);
    if (str.length === 8) {
      return 8;
    }
    return false;
  }

  function onReceive(recvPayload) {
    content = Quiet.str2ab("");
    content = Quiet.mergeab(content, recvPayload);
    target.textContent = Quiet.ab2str(content);
    warningbox.classList.add("hidden");
    console.log(target.textContent);
    var validate = validateReceived(target.textContent);
    if (validate === "true") {
      console.log("Within the length true");
    } else {
      console.log("Not withing the length false");
    }
  }

  function onReceiverCreateFail(reason) {
    console.log("failed to create quiet receiver: " + reason);
    warningbox.classList.remove("hidden");
    warningbox.textContent =
      "Sorry, it looks like this example is not supported by your browser. Please give permission to use the microphone or try again in Google Chrome or Microsoft Edge.";
  }

  function onReceiveFail(num_fails) {
    warningbox.classList.remove("hidden");
    warningbox.textContent =
      "We didn't quite get that. It looks like you tried to transmit something. You may need to move the transmitter closer to the receiver and set the volume to 50%.";
  }

  function onQuietReady() {
    var profilename = document
      .querySelector("[data-quiet-profile-name]")
      .getAttribute("data-quiet-profile-name");
    Quiet.receiver({
      profile: profilename,
      onReceive: onReceive,
      onCreateFail: onReceiverCreateFail,
      onReceiveFail: onReceiveFail
    });
  }

  function onQuietFail(reason) {
    console.log("quiet failed to initialize: " + reason);
    warningbox.classList.remove("hidden");
    warningbox.textContent =
      "Sorry, it looks like there was a problem with this example (" +
      reason +
      ")";
  }

  function onDOMLoadReceiver() {
    target = document.querySelector("[data-quiet-receive-text-target]");
    console.log("in OnDomLoad");
    warningbox = document.querySelector("[data-quiet-warning]");
    Quiet.addReadyCallback(onQuietReady, onQuietFail);
  }

  onDOMLoadReceiver();
  //document.addEventListener("DOMContentLoaded", onDOMLoad);
})();

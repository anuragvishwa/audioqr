/* Copyright 2016, Brian Armstrong
 * quiet.js includes compiled portions from other sources
 *  - liquid DSP, Copyright (c) 2007-2016 Joseph Gaeddert
 *  - libjansson, Copyright (c) 2009-2016 Petri Lehtinen
 *  - emscripten, Copyright (c) 2010-2016 Emscripten authors
 */

var TextReceiver = (function() {
  // console.log("In TextReceiver function");
  Quiet.init({
    profilesPrefix: "/",
    memoryInitializerPrefix: "/",
    libfecPrefix: "/"
  });
  var target;

  var content = new ArrayBuffer(0);
  var warningbox;

  function onReceive(recvPayload) {
    content = Quiet.str2ab("");
    content = Quiet.mergeab(content, recvPayload);
    target.textContent = Quiet.ab2str(content);
    target.value = target.textContent;

    var element = document.getElementById("kilo");
    let event = new Event("change", { bubbles: true });
    element.dispatchEvent(event);

    warningbox.classList.add("hidden");
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

  function myFunction(target) {
    var myVal = document.getElementById("kilo");
    myVal.value = target.value;
    //  console.log("In my function");
  }

  function onDOMLoadReceiver() {
    target = document.querySelector("[data-quiet-receive-text-target]");
    //  target.addEventListener("change", myFunction(this));
    // console.log("in OnDomLoad");
    warningbox = document.querySelector("[data-quiet-warning]");
    Quiet.addReadyCallback(onQuietReady, onQuietFail);
  }

  onDOMLoadReceiver();
  //document.addEventListener("DOMContentLoaded", onDOMLoad);
})();
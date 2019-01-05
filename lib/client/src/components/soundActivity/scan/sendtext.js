//SendSound
var TextTransmitter = (function() {
  Quiet.init({
    profilesPrefix: "/",
    memoryInitializerPrefix: "/",
    libfecPrefix: "/"
  });
  var btn;
  var textbox;
  var warningbox;
  var transmit;
  var para;

  function onTransmitFinish() {
    //  textbox.focus();
    btn.addEventListener("click", onClick, false);
    btn.disabled = false;
    var originalText = btn.innerText;
    btn.innerText = btn.getAttribute("data-quiet-sending-text");
    btn.setAttribute("data-quiet-sending-text", originalText);
  }

  function onClick(e) {
    e.target.removeEventListener(e.type, arguments.callee);
    e.target.disabled = true;
    var originalText = e.target.innerText;
    e.target.innerText = e.target.getAttribute("data-quiet-sending-text");
    e.target.setAttribute("data-quiet-sending-text", originalText);
    let flag = e.target.getAttribute("data-flag");
    var payload = para.innerText;
    transmit.transmit(Quiet.str2ab(payload));
    if (flag === "true") {
      (function myLoop(i) {
        setTimeout(function() {
          transmit.transmit(Quiet.str2ab(payload));
          console.log(payload);
          if (--i) myLoop(i);
        }, 3000);
      })(10);
    }
    if (payload === "") {
      onTransmitFinish();
      return;
    }
  }

  function onQuietReady() {
    var profilename = document
      .querySelector("[data-quiet-profile-name]")
      .getAttribute("data-quiet-profile-name");
    transmit = Quiet.transmitter({
      profile: profilename,
      onFinish: onTransmitFinish
    });
    btn.addEventListener("click", onClick, false);
  }

  function onQuietFail(reason) {
    console.log("quiet failed to initialize: " + reason);
    warningbox.classList.remove("hidden");
    warningbox.textContent =
      "Sorry, it looks like there was a problem with this example (" +
      reason +
      ")";
  }

  function onDOMLoad() {
    btn = document.querySelector("[data-quiet-send-button]");
    textbox = document.querySelector("[data-quiet-text-input]");
    warningbox = document.querySelector("[data-quiet-warning]");
    para = document.querySelector("[data-send-para]");
    Quiet.addReadyCallback(onQuietReady, onQuietFail);
  }
  onDOMLoad();
})();

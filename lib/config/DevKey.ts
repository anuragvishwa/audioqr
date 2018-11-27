import { Keys } from "./Keys";

export class DevKey implements Keys {
  readonly googleClientID =
    "165195587319-123s7eteft02c23cdtv7jn36c5tpjcra.apps.googleusercontent.com";
  readonly googleClientSecret = "9nooAofpjAuLF4qAqgLKRUvj";
  readonly mongoURI =
    "mongodb://root:av19sep90*@ds241012.mlab.com:41012/audioqr";
  readonly cookieKey = "jdgafhgjdgfhjgsdfjbmbjkhjkhdaskjhkjhasd";

  getGoogleClientId(): String {
    console.log("anurag vishwa" + this.googleClientID);
    return this.googleClientID;
  }
  getClientSecret(): String {
    return this.googleClientSecret;
  }
  getMongoUri(): String {
    return this.mongoURI;
  }
  getCookieKey(): String {
    return this.cookieKey;
  }
}

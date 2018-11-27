export interface ProfileInterface {
  addNewProfile(userId: String, googleId: String);
  deleteProfile(userId: String);
  updateProfile();
  getProfile(userId: String);
}

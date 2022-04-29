import { takeLatest, put } from 'redux-saga/effects';
import {
  addProblemAlertHandler,
  createJobHandler,
  deleteProblemAlertHandler,
  emailUpdateHandler,
  emailUpdateOtpHandler,
  changeProfileHandler,
  getCategoriesHandler,
  getClientListHandler,
  getLanguagesHandler,
  getProblemAlertHandler,
  // getSolverJobsHandler,
  logoutHandler,
  mobileNumFirstStepHandler,
  mobileNumSecondStepHandler,
  notifyProblemAlertHandler,
  passportUpdateHandler,
  passportUpdateOtpHandler,
  phoneUpdateHandler,
  phoneUpdateOtpHandler,
  resetPinHandler,
  resetPinOtpHandler,
  signInHandler,
  signUpHandler,
  skillsUpdateHandler,
  verifyLoginOtpHandler,
  verifyMobileOtpHandler,
  verifyOtpHandler,
  editJobHandler,
  deleteJobHandler,
  cancelJobJobHandler,
  cancelJobHandler,
  getJobHandler,
  appSettingsHandler,
  getSolverListHandler,
  addPortfolioImageHandler,
  getPortfolioImagesHandler,
  deletePortfolioImageHandler,
  getOtherUserProfileHandler,
  jobOfferAddHandler,
  jobOfferEditHandler,
  jobOfferListHandler,
  getUserProfileHandler,
  jobQuestionAddHandler,
  jobQuestionListHandler,
  jobOfferAcceptHandler,
  jobOfferCancelHandler,
  jobBookmarkHandler,
  addReviewHandler,
  getReviewHandler,
  addSupportHandler,
  closeSupportHandler,
  getSupportListHandler,
  supportChatListHandler,
  getSolverReviewHandler,
  jobInvitedHandler,
  jobSolvedHandler,
  editUserAddressHandler,
  editSpokenLanguagesHandler
} from './handlers';
import * as actions from '../actiontypes';
import API from './request';


//App Settings
export function* AppSettings() {
  console.log('helo BOLEH')
  try {
    yield takeLatest(actions.APP_SETTINGS, appSettingsHandler)
  } catch (ex) {
    yield put({ type: actions.APP_SETTINGS_FAILURE, message: ex })
  }
}

//SignIn
export function* SignIn() {
  console.log('helo signin')
  try {
    yield takeLatest(actions.LOGIN, signInHandler)
  } catch (ex) {
    yield put({ type: actions.LOGIN_FAILURE, message: ex })
  }
}

export function* SignUp() {
  console.log('helo signup')
  try {
    yield takeLatest(actions.SIGNUP, signUpHandler)
  } catch (ex) {
    yield put({ type: actions.SIGNUP_FAILURE, message: ex })
  }
}

//Verify OTP
export function* VerifyOtp() {
  try {
    yield takeLatest(actions.VERIFY_OTP, verifyOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.VERIFY_OTP_FAILURE, message: ex })
  }
}

//Verify LOGIN OTP
export function* VerifyLoginOtp() {
  try {
    yield takeLatest(actions.VERIFY_LOGIN_OTP, verifyLoginOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.VERIFY_LOGIN_OTP_FAILURE, message: ex })
  }
}

//Verify MOBILE OTP
export function* VerifyMobileOtp() {
  try {
    yield takeLatest(actions.VERIFY_MOBILE_OTP, verifyMobileOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.VERIFY_MOBILE_OTP_FAILURE, message: ex })
  }
}

//Mobile Num First Step
export function* MobileNumFirstStep() {
  try {
    yield takeLatest(actions.MOBILE_NUM_FIRST_STEP, mobileNumFirstStepHandler);
  }
  catch (ex) {
    yield put({ type: actions.MOBILE_NUM_FIRST_STEP_FAILURE, message: ex })
  }
}

//Mobile Num Second Step
export function* MobileNumSecondStep() {
  try {
    yield takeLatest(actions.MOBILE_NUM_SECOND_STEP, mobileNumSecondStepHandler);
  }
  catch (ex) {
    yield put({ type: actions.MOBILE_NUM_SECOND_STEP_FAILURE, message: ex })
  }
}

export function* ResetPin() {
  try {
    yield takeLatest(actions.RESET_PIN, resetPinHandler);
  }
  catch (ex) {
    yield put({ type: actions.RESET_PIN_FAILURE, message: ex })
  }
}

export function* ResetPinOtp() {
  try {
    yield takeLatest(actions.RESET_PIN_OTP, resetPinOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.RESET_PIN_OTP_FAILURE, message: ex })
  }
}

// edit profile
export function* ChangeProfile() {
  try {
    yield takeLatest(actions.CHANGE_PROFILE, changeProfileHandler);
  }
  catch (ex) {
    yield put({ type: actions.CHANGE_PROFILE_FAILURE, message: ex })
  }
}


// //Forgot Passwrod
// export function* ForgotPassword() {
//     try {
//       yield takeLatest(actions.FORGOT_PASSWORD, forgotPasswordHandler);
//     }
//     catch (ex) {
//       yield put({ type: actions.FORGOT_PASSWORD_FAILURE, message: ex })
//     }
// }

// export function* ChangePassword() {
//     try {
//       yield takeLatest(actions.CHANGE_PASSWORD, changePasswordHandler);
//     }
//     catch (ex) {
//       yield put({ type: actions.CHANGE_PASSWORD_FAILURE, message: ex })
//     }
// }

// //Contact Us
// export function* ContactUs() {
//     try {
//       yield takeLatest(actions.CONTACT_US, contactUsHandler);
//     }
//     catch (ex) {
//       yield put({ type: actions.CONTACT_US_FAILURE, message: ex })
//     }
//   }


//Verify OTP
export function* LogoutAction() {
  try {
    yield takeLatest(actions.LOGOUT, logoutHandler);
  }
  catch (ex) {
    yield put({ type: actions.LOGOUT_FAILURE, message: ex })
  }
}
// Get Categories
export function* GetCategories() {
  try {
    yield takeLatest(actions.GET_CATEGORIES, getCategoriesHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_CATEGORIES_FAILURE, message: ex })
  }
}
// Get Languages
export function* GetLanguages() {
  try {
    yield takeLatest(actions.GET_LANGUAGES, getLanguagesHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_LANGUAGES_FAILURE, message: ex })
  }
}
// Email Update Step 1
export function* EmailUpdate() {
  try {
    yield takeLatest(actions.EMAIL_UPDATE, emailUpdateHandler);
  }
  catch (ex) {
    yield put({ type: actions.EMAIL_UPDATE_FAILURE, message: ex })
  }
}
// Phone Update Step 1
export function* PhoneUpdate() {
  try {
    yield takeLatest(actions.PHONE_UPDATE, phoneUpdateHandler);
  }
  catch (ex) {
    yield put({ type: actions.PHONE_UPDATE_FAILURE, message: ex })
  }
}
// Passport Update Step 1
export function* PassportUpdate() {
  try {
    yield takeLatest(actions.PASSPORT_UPDATE, passportUpdateHandler);
  }
  catch (ex) {
    yield put({ type: actions.PASSPORT_UPDATE_FAILURE, message: ex })
  }
}
// Email Update Otp
export function* EmailUpdateOtp() {
  try {
    yield takeLatest(actions.EMAIL_UPDATE_OTP, emailUpdateOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.EMAIL_UPDATE_OTP_FAILURE, message: ex })
  }
}
// Phone Update Otp
export function* PhoneUpdateOtp() {
  try {
    yield takeLatest(actions.PHONE_UPDATE_OTP, phoneUpdateOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.PHONE_UPDATE_OTP_FAILURE, message: ex })
  }
}
// Passport Update Otp
export function* PassportUpdateOtp() {
  try {
    yield takeLatest(actions.PASSPORT_UPDATE_OTP, passportUpdateOtpHandler);
  }
  catch (ex) {
    yield put({ type: actions.PASSPORT_UPDATE_OTP_FAILURE, message: ex })
  }
}
// Skills Update Otp
export function* SkillsUpdate() {
  try {
    yield takeLatest(actions.SKILLS_UPDATE, skillsUpdateHandler);
  }
  catch (ex) {
    yield put({ type: actions.SKILLS_UPDATE_FAILURE, message: ex })
  }
}

// Notify Problem Alerts
export function* NotifyProblemAlert() {
  try {
    yield takeLatest(actions.NOTIFY_PROBLEM_ALERT, notifyProblemAlertHandler);
  }
  catch (ex) {
    yield put({ type: actions.NOTIFY_PROBLEM_ALERT_FAILURE, message: ex })
  }
}

// Get Problem Alerts
export function* GetProblemAlert() {
  try {
    yield takeLatest(actions.GET_PROBLEM_ALERT, getProblemAlertHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_PROBLEM_ALERT_FAILURE, message: ex })
  }
}

// Add Problem Alerts
export function* AddProblemAlert() {
  try {
    yield takeLatest(actions.ADD_PROBLEM_ALERT, addProblemAlertHandler);
  }
  catch (ex) {
    yield put({ type: actions.ADD_PROBLEM_ALERT_FAILURE, message: ex })
  }
}

// Delete Problem Alerts
export function* DeleteProblemAlert() {
  try {
    yield takeLatest(actions.DELETE_PROBLEM_ALERT, deleteProblemAlertHandler);
  }
  catch (ex) {
    yield put({ type: actions.DELETE_PROBLEM_ALERT_FAILURE, message: ex })
  }
}

// Create Job
export function* CreateJob() {
  try {
    yield takeLatest(actions.CREATE_JOB, createJobHandler);
  }
  catch (ex) {
    yield put({ type: actions.CREATE_JOB_FAILURE, message: ex })
  }
}

// Edit Job
export function* EditJob() {
  try {
    yield takeLatest(actions.EDIT_JOB, editJobHandler);
  }
  catch (ex) {
    yield put({ type: actions.EDIT_JOB_FAILURE, message: ex })
  }
}

// Delete Job
export function* DeleteJob() {
  try {
    yield takeLatest(actions.DELETE_JOB, deleteJobHandler);
  }
  catch (ex) {
    yield put({ type: actions.DELETE_JOB_FAILURE, message: ex })
  }
}

// Canceled Job
export function* CancelJob() {
  try {
    yield takeLatest(actions.CANCEL_JOB, cancelJobHandler);
  }
  catch (ex) {
    yield put({ type: actions.CANCEL_JOB_FAILURE, message: ex })
  }
}

// Get Job
export function* GetJob() {
  try {
    yield takeLatest(actions.GET_JOB, getJobHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_JOB_FAILURE, message: ex })
  }
}


// Get CLIENT-SOLVE LIST
export function* GetClientList() {
  try {
    yield takeLatest(actions.GET_CLIENT_LIST, getClientListHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_CATEGORIES_FAILURE, message: ex })
  }
}

// Get SOLVER-SOLVE LIST
export function* GetSolverList() {
  try {
    yield takeLatest(actions.GET_SOLVER_LIST, getSolverListHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_SOLVER_LIST_FAILURE, message: ex })
  }
}

// add portfolio image
export function* AddPortfolioImage() {
  try {
    yield takeLatest(actions.ADD_PORTFOLIO_IMAGE, addPortfolioImageHandler);
  }
  catch (ex) {
    yield put({ type: actions.ADD_PORTFOLIO_IMAGE_FAILURE, message: ex })
  }
}

// add portfolio images
export function* GetPortfolioImages() {
  try {
    yield takeLatest(actions.GET_PORTFOLIO_IMAGES, getPortfolioImagesHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_PORTFOLIO_IMAGES_FAILURE, message: ex })
  }
}

// delete portfolio image
export function* DeletePortfolioImage() {
  try {
    yield takeLatest(actions.DELETE_PORTFOLIO_IMAGE, deletePortfolioImageHandler);
  }
  catch (ex) {
    yield put({ type: actions.DELETE_PORTFOLIO_IMAGE_FAILURE, message: ex })
  }
}

// user profile
export function* GetUserProfile() {
  try {
    yield takeLatest(actions.GET_USER_PROFILE, getUserProfileHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_USER_PROFILE_FAILURE, message: ex })
  }
}

// other user profile
export function* GetOtherUserProfile() {
  try {
    yield takeLatest(actions.GET_OTHER_USER_PROFILE, getOtherUserProfileHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_OTHER_USER_PROFILE_FAILURE, message: ex })
  }
}

// job offer add
export function* jobOfferAdd() {
  try {
    yield takeLatest(actions.JOB_OFFER_ADD, jobOfferAddHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_OFFER_ADD_FAILURE, message: ex })
  }
}

// job offer edit
export function* JobOfferEdit() {
  try {
    yield takeLatest(actions.JOB_OFFER_EDIT, jobOfferEditHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_OFFER_EDIT_FAILURE, message: ex })
  }
}

// job offer list
export function* JobOfferList() {
  try {
    yield takeLatest(actions.GET_JOB_OFFER_LIST, jobOfferListHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_JOB_OFFER_LIST_FAILURE, message: ex })
  }
}

// job offer accept
export function* JobOfferAccept() {
  try {
    yield takeLatest(actions.JOB_OFFER_ACCEPT, jobOfferAcceptHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_OFFER_ACCEPT_FAILURE, message: ex })
  }
}

// job SOLVED
export function* JobSolved() {
  try {
    yield takeLatest(actions.JOB_SOLVED, jobSolvedHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_SOLVED_FAILURE, message: ex })
  }
}

// job offer accept
export function* JobOfferCancel() {
  try {
    yield takeLatest(actions.JOB_OFFER_CANCEL, jobOfferCancelHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_OFFER_CANCEL_FAILURE, message: ex })
  }
}

// job INVITED
export function* JobInvited() {
  try {
    yield takeLatest(actions.JOB_INVITED, jobInvitedHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_INVITED_FAILURE, message: ex })
  }
}

// job question add
export function* JobQuestionAdd() {
  try {
    yield takeLatest(actions.JOB_QUESTION_ADD, jobQuestionAddHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_QUESTION_ADD_FAILURE, message: ex })
  }
}

// job question list
export function* JobQuestionList() {
  try {
    yield takeLatest(actions.JOB_QUESTION_LIST, jobQuestionListHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_QUESTION_LIST_FAILURE, message: ex })
  }
}

// job BOOKMARK
export function* JobBookmark() {
  try {
    yield takeLatest(actions.JOB_BOOKMARK, jobBookmarkHandler);
  }
  catch (ex) {
    yield put({ type: actions.JOB_BOOKMARK_FAILURE, message: ex })
  }
}

// ADD REVIEW
export function* AddReview() {
  try {
    yield takeLatest(actions.ADD_REVIEW, addReviewHandler);
  }
  catch (ex) {
    yield put({ type: actions.ADD_REVIEW_FAILURE, message: ex })
  }
}

// GET REVIEW
export function* GetReview() {
  try {
    yield takeLatest(actions.GET_REVIEW, getReviewHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_REVIEW_FAILURE, message: ex })
  }
}

// GET SOLVER REVIEW
export function* GetSolverReview() {
  try {
    yield takeLatest(actions.GET_SOLVER_REVIEW, getSolverReviewHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_SOLVER_REVIEW_FAILURE, message: ex })
  }
}

// ADD SUPPORT
export function* AddSupport() {
  try {
    yield takeLatest(actions.ADD_SUPPORT, addSupportHandler);
  }
  catch (ex) {
    yield put({ type: actions.ADD_SUPPORT_FAILURE, message: ex })
  }
}

// Close SUPPORT
export function* CloseSupport() {
  try {
    yield takeLatest(actions.CLOSE_SUPPORT, closeSupportHandler);
  }
  catch (ex) {
    yield put({ type: actions.CLOSE_SUPPORT_FAILURE, message: ex })
  }
}

// GET SUPPORT LIST
export function* GetSupportList() {
  try {
    yield takeLatest(actions.GET_SUPPORT_LIST, getSupportListHandler);
  }
  catch (ex) {
    yield put({ type: actions.GET_SUPPORT_LIST_FAILURE, message: ex })
  }
}

// GET SUPPORT CHAT LIST
export function* SupportChatList() {
  try {
    yield takeLatest(actions.SUPPORT_CHAT_LIST, supportChatListHandler);
  }
  catch (ex) {
    yield put({ type: actions.SUPPORT_CHAT_LIST_FAILURE, message: ex })
  }
}

// GET SUPPORT CHAT LIST
export function* EditUserAddress() {
  try {
    yield takeLatest(actions.EDIT_USER_ADDRESS, editUserAddressHandler);
  }
  catch (ex) {
    yield put({ type: actions.EDIT_USER_ADDRESS_FAILURE, message: ex })
  }
}

//EDIT_SPOKEN_LANGUAGES
export function* EditSpokenLanguages() {
  try {
    yield takeLatest(actions.EDIT_SPOKEN_LANGUAGES, editSpokenLanguagesHandler);
  }
  catch (ex) {
    yield put({ type: actions.EDIT_SPOKEN_LANGUAGES_FAILURE, message: ex })
  }
}
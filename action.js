import * as actions from './actiontypes';

export const AppSettings = payload => {
    return { type: actions.APP_SETTINGS, payload }
}

export const ClearAction = payload => {
    return { type: actions.CLEAR_DATA, payload }
}

export const SignIn = (payload) => {
    return { type: actions.LOGIN, payload }
}

export const SocialSignIn = payload => {
    return { type: actions.SOCIAL_LOGIN, payload }
}

export const LogoutAction = payload => {
    return { type: actions.LOGOUT, payload }
}

export const SignUp = payload => {
    return { type: actions.SIGNUP, payload }
}

export const VerifyOtp = payload => {
    return { type: actions.VERIFY_OTP, payload }
}

export const VerifyLoginOtp = payload => {
    return { type: actions.VERIFY_LOGIN_OTP, payload }
}

export const VerifyMobileOtp = payload => {
    return { type: actions.VERIFY_MOBILE_OTP, payload }
}

export const MobileNumFirstStep = payload => {
    return { type: actions.MOBILE_NUM_FIRST_STEP, payload }
}

export const MobileNumSecondStep = payload => {
    return { type: actions.MOBILE_NUM_SECOND_STEP, payload }
}

export const ResetPin = payload => {
    return { type: actions.RESET_PIN, payload }
}

export const ResetPinOtp = payload => {
    return { type: actions.RESET_PIN_OTP, payload }
}

export const ChangeProfile = payload => {
    return { type: actions.CHANGE_PROFILE, payload }
}

export const GetCategories = payload => {
    return { type: actions.GET_CATEGORIES, payload }
}

export const GetLanguages = payload => {
    return { type: actions.GET_LANGUAGES, payload }
}

export const FortgotPasswordAction = payload => {
    return { type: actions.FORGOT_PASSWORD, payload }
}

export const ChangePassword = payload => {
    return { type: actions.CHANGE_PASSWORD, payload }
}

export const ContactUs = payload => {
    return { type: actions.CONTACT_US, payload }
}

export const EmailUpdate = payload => {
    return { type: actions.EMAIL_UPDATE, payload }
}

export const PhoneUpdate = payload => {
    return { type: actions.PHONE_UPDATE, payload }
}

export const PassportUpdate = payload => {
    return { type: actions.PASSPORT_UPDATE, payload }
}

export const EmailUpdateOtp = payload => {
    return { type: actions.EMAIL_UPDATE_OTP, payload }
}

export const PhoneUpdateOtp = payload => {
    return { type: actions.PHONE_UPDATE_OTP, payload }
}

export const PassportUpdateOtp = payload => {
    return { type: actions.PASSPORT_UPDATE_OTP, payload }
}

export const SkillsUpdate = payload => {
    return { type: actions.SKILLS_UPDATE, payload }
}

export const NotifyProblemAlert = payload => {
    return { type: actions.NOTIFY_PROBLEM_ALERT, payload }
}

export const GetProblemAlert = payload => {
    return { type: actions.GET_PROBLEM_ALERT, payload }
}

export const AddProblemAlert = payload => {
    return { type: actions.ADD_PROBLEM_ALERT, payload }
}

export const DeleteProblemAlert = payload => {
    return { type: actions.DELETE_PROBLEM_ALERT, payload }
}

export const CreateJob = payload => {
    return { type: actions.CREATE_JOB, payload }
}

export const EditJob = payload => {
    return { type: actions.EDIT_JOB, payload }
}

export const DeleteJob = payload => {
    return { type: actions.DELETE_JOB, payload }
}

export const CancelJob = payload => {
    return { type: actions.CANCEL_JOB, payload }
}

export const GetJob = payload => {
    return { type: actions.GET_JOB, payload }
}

export const GetClientList = payload => {
    return { type: actions.GET_CLIENT_LIST, payload }
}

export const GetSolverList = payload => {
    return { type: actions.GET_SOLVER_LIST, payload }
}

export const AddPortfolioImage = payload => {
    return { type: actions.ADD_PORTFOLIO_IMAGE, payload }
}

export const GetPortfolioImages = payload => {
    return { type: actions.GET_PORTFOLIO_IMAGES, payload }
}

export const DeletePortfolioImage = payload => {
    return { type: actions.DELETE_PORTFOLIO_IMAGE, payload }
}

export const GetUserProfile = payload => {
    return { type: actions.GET_USER_PROFILE, payload }
}

export const GetOtherUserProfile = payload => {
    return { type: actions.GET_OTHER_USER_PROFILE, payload }
}

export const JobOfferAdd = payload => {
    return { type: actions.JOB_OFFER_ADD, payload }
}

export const JobOfferEdit = payload => {
    return { type: actions.JOB_OFFER_EDIT, payload }
}

export const JobOfferList = payload => {
    return { type: actions.GET_JOB_OFFER_LIST, payload }
}

export const JobOfferAccept = payload => {
    return { type: actions.JOB_OFFER_ACCEPT, payload }
}

export const JobOfferCancel = payload => {
    return { type: actions.JOB_OFFER_CANCEL, payload }
}

export const JobSolved = payload => {
    return { type: actions.JOB_SOLVED, payload }
}

export const JobInvited = payload => {
    return { type: actions.JOB_INVITED, payload }
}

export const JobQuestionAdd = payload => {
    return { type: actions.JOB_QUESTION_ADD, payload }
}

export const JobQuestionList = payload => {
    return { type: actions.JOB_QUESTION_LIST, payload }
}

export const JobBookmark = payload => {
    return { type: actions.JOB_BOOKMARK, payload }
}

export const AddReview = payload => {
    return { type: actions.ADD_REVIEW, payload }
}

export const GetReview = payload => {
    return { type: actions.GET_REVIEW, payload }
}

export const GetSolverReview = payload => {
    return { type: actions.GET_SOLVER_REVIEW, payload }
}

export const AddSupport = payload => {
    return { type: actions.ADD_SUPPORT, payload }
}

export const CloseSupport = payload => {
    return { type: actions.CLOSE_SUPPORT, payload }
}

export const GetSupportList = payload => {
    return { type: actions.GET_SUPPORT_LIST, payload }
}

export const SupportChatList = payload => {
    return { type: actions.SUPPORT_CHAT_LIST, payload }
}

export const EditUserAddress = payload => {
    return { type: actions.EDIT_USER_ADDRESS, payload }
}

export const EditSpokenLanguages = payload => {
    return { type: actions.EDIT_SPOKEN_LANGUAGES, payload }
}



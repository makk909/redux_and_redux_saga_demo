import { IMAGE_URL } from '../config/baseurl';
import * as actions from './actiontypes';


export const reducer = (state = [], action) => {
    switch (action.type) {

        case actions.LOADER:
            return {
                ...state,
                case: action.type,
                loading: action.loading,
                // userData:'',
                // token:''
            }
        case actions.CLEAR_DATA:
            return {
                ...state,
                case: '',
                message: '',
                loading: null,

            }
        case actions.APP_SETTINGS_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                app_settings: action.payload,
                categories: action.payload.categories,
                languages: action.payload.languages
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                userData: action.payload,
            }
        case actions.SOCIAL_LOGIN_SUCCESS:
            return {
                ...state,
                socialData: action.payload,
                case: action.type,
                message: action.message,

            }
        case actions.LOGOUT_SUCCESS:
            return {
                ...state,
                case: action.type,
                userData: '',
                mobileData: '',
                message: '',
                token: ''
            }
        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                userData: action.payload,
            }
        case actions.VERIFY_OTP_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                case: action.type,
                message: action.message,
                token: action.payload.auth.token,
                user: action.payload.user
            }
        case actions.VERIFY_LOGIN_OTP_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                case: action.type,
                message: action.message,
                token: action.payload.auth.token,
                user: action.payload.user
            }

        case actions.MOBILE_NUM_FIRST_STEP_SUCCESS:
            return {
                ...state,
                mobileData: action.payload,
                case: action.type,
                message: action.message,
            }

        case actions.MOBILE_NUM_SECOND_STEP_SUCCESS:
            return {
                ...state,
                mobileData: action.payload,
                case: action.type,
                message: action.message,
            }

        case actions.RESET_PIN_SUCCESS:
            return {
                ...state,
                pinData: action.payload,
                case: action.type,
                message: action.message,
            }

        case actions.RESET_PIN_OTP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }

        case actions.CHANGE_PROFILE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                profile_changed: action.payload

            }
        case actions.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.CONTACT_US_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // categories:action.payload
            }
        case actions.GET_LANGUAGES_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                languages: action.payload
            }
        case actions.EMAIL_UPDATE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                email_update: action.payload
            }
        case actions.PHONE_UPDATE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                phone_update: action.payload
            }
        case actions.PASSPORT_UPDATE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                passport_update: action.payload
            }
        case actions.EMAIL_UPDATE_OTP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                email_update_otp: action.payload,
                token: action.payload.data.auth.token
            }
        case actions.PHONE_UPDATE_OTP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                phone_update_otp: action.payload,
                token: action.payload.data.auth.token
            }
        case actions.PASSPORT_UPDATE_OTP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                passport_update_otp: action.payload,
                token: action.payload.data.auth.token
            }
        case actions.SKILLS_UPDATE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                skills_update: action.payload,
                user: action.payload.user
            }
        case actions.GET_PROBLEM_ALERT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                problem_alerts: action.payload,
            }
        case actions.ADD_PROBLEM_ALERT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // skills_update:action.payload,
            }
        case actions.DELETE_PROBLEM_ALERT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // skills_update:action.payload,
            }
        case actions.NOTIFY_PROBLEM_ALERT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // skills_update:action.payload,
            }
        case actions.CREATE_JOB_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job: action.payload,
                job_id: action.payload.job.id
            }
        case actions.EDIT_JOB_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job_updated: action.payload,
            }
        case actions.DELETE_JOB_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                deleted_data: action.payload
            }
        case actions.CANCEL_JOB_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job_cancelled: action.payload
            }
        case actions.GET_JOB_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job_detail: action.payload,
            }
        case actions.GET_CLIENT_LIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                client_list: action.payload.list,
            }
        case actions.GET_SOLVER_LIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                solver_list: action.payload.list,
            }
        case actions.ADD_PORTFOLIO_IMAGE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                portfolio_image: action.payload.media,
            }
        case actions.GET_PORTFOLIO_IMAGES_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                portfolio_list: action.payload,
            }
        case actions.DELETE_PORTFOLIO_IMAGE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                user_profile: action.payload.user
            }
        case actions.GET_OTHER_USER_PROFILE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                other_user_profile: action.payload
            }
        case actions.JOB_OFFER_ADD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.JOB_OFFER_EDIT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.GET_JOB_OFFER_LIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job_offers_list: action.payload
            }
        case actions.JOB_OFFER_ACCEPT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.JOB_OFFER_CANCEL_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.JOB_SOLVED_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.JOB_INVITED_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.JOB_QUESTION_ADD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.JOB_QUESTION_LIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job_question_list: action.payload
            }
        case actions.JOB_BOOKMARK_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                job_bookmark: action.payload
            }
        case actions.ADD_REVIEW_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // user_review: action.payload
            }
        case actions.GET_REVIEW_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                user_reviews: action.payload
            }
        case actions.GET_SOLVER_REVIEW_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                as_solver_reviews: action.payload
            }
        case actions.ADD_SUPPORT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.CLOSE_SUPPORT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case actions.GET_SUPPORT_LIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                support_list: action.payload
            }
        case actions.SUPPORT_CHAT_LIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                support_chat_list: action.payload
            }
        case actions.EDIT_USER_ADDRESS_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                user_address: action.payload
            }
        case actions.EDIT_SPOKEN_LANGUAGES_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                spoken_languages: action.payload
            }


        default:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
    }
}
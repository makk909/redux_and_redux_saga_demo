import { put } from 'redux-saga/effects';
import API from './request';
import * as actions from '../actiontypes';
import { AppConstant } from '../../assets/globalstyleconstants';


export function* appSettingsHandler(payload) {
    const resp = yield API(`common/settings`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.APP_SETTINGS_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.APP_SETTINGS_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.APP_SETTINGS_FAILURE, message: resp.body.Message })
    }
}

export function* signInHandler(payload) {
    console.log('check', payload);
    yield put({ type: actions.LOADER, loading: true });
    const resp = yield API('auth/login', 'POST', payload.payload);
    if (resp.status == 200) {
        let response = resp.body;
        console.log('DATA LOGIN', resp.body);
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false });
            yield put({
                type: actions.LOGIN_SUCCESS,
                message: response.message,
                payload: response,
            });
        } else {
            yield put({ type: actions.LOADER, loading: false });
            yield put({ type: actions.LOGIN_FAILURE, message: response.message });
        }
    } else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false });
        yield put({ type: actions.LOGIN_FAILURE, message: resp.body.Message });
    }
}

export function* signUpHandler(payload) {
    const resp = yield API('auth/signup', 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.SIGNUP_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.SIGNUP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.SIGNUP_FAILURE, message: resp.body.Message })
    }
}

export function* verifyOtpHandler(payload) {
    yield put({ type: actions.LOADER, loading: true });
    const res = yield API('auth/signup/otp', 'POST', payload.payload);
    if (res.status === 200) {
        let response = res.body;
        console.log('otttp', response);
        if (response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false });
            yield put({
                type: actions.VERIFY_OTP_SUCCESS,
                message: response.message,
                payload: response.data,
            });
        } else {
            yield put({ type: actions.LOADER, loading: false });
            yield put({ type: actions.VERIFY_OTP_FAILURE, message: response.message });
        }
    } else {
        yield put({ type: actions.LOADER, loading: false });
        yield put({ type: actions.VERIFY_OTP_FAILURE, message: response.message });
    }
}

export function* verifyLoginOtpHandler(payload) {
    yield put({ type: actions.LOADER, loading: true });
    const res = yield API('auth/login/otp', 'POST', payload.payload);
    if (res.status === 200) {
        let response = res.body;
        console.log('login otp', response);
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false });
            yield put({
                type: actions.VERIFY_LOGIN_OTP_SUCCESS,
                message: response.message,
                payload: response.data,
            });
        } else {
            yield put({ type: actions.LOADER, loading: false });
            yield put({ type: actions.VERIFY_LOGIN_OTP_FAILURE, message: response.message });
        }
    } else {
        yield put({ type: actions.LOADER, loading: false });
        yield put({ type: actions.VERIFY_LOGIN_OTP_FAILURE, message: response.message });
    }
}

export function* verifyMobileOtpHandler(payload) {
    yield put({ type: actions.LOADER, loading: true });
    const res = yield API('auth/phoneChange/otp', 'PUT', payload.payload);
    if (res.status === 200) {
        let response = res.body;
        console.log('login otp', response);
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false });
            yield put({
                type: actions.VERIFY_MOBILE_OTP_SUCCESS,
                message: response.message,
                payload: response.data,
            });
        } else {
            yield put({ type: actions.LOADER, loading: false });
            yield put({ type: actions.VERIFY_MOBILE_OTP_FAILURE, message: response.message });
        }
    } else {
        yield put({ type: actions.LOADER, loading: false });
        yield put({ type: actions.VERIFY_MOBILE_OTP_FAILURE, message: response.message });
    }
}

export function* mobileNumFirstStepHandler(payload) {
    const resp = yield API('auth/phoneChange', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.MOBILE_NUM_FIRST_STEP_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.MOBILE_NUM_FIRST_STEP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.MOBILE_NUM_FIRST_STEP_FAILURE, message: resp.body.Message })
    }
}

export function* mobileNumSecondStepHandler(payload) {
    const resp = yield API('auth/phoneChange/new', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.MOBILE_NUM_SECOND_STEP_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.MOBILE_NUM_SECOND_STEP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.MOBILE_NUM_SECOND_STEP_FAILURE, message: resp.body.Message })
    }
}

export function* resetPinHandler(payload) {
    const resp = yield API('auth/pinReset', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.RESET_PIN_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.RESET_PIN_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.RESET_PIN_FAILURE, message: resp.body.Message })
    }
}

export function* resetPinOtpHandler(payload) {
    const resp = yield API('auth/pinReset/otp', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.RESET_PIN_OTP_SUCCESS, payload: resp.body, message: response.message })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.RESET_PIN_OTP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.RESET_PIN_OTP_FAILURE, message: resp.body.Message })
    }
}


export function* changeProfileHandler(payload) {
    console.log('check', payload)
    yield put({ type: actions.LOADER, loading: true })
    const resp = yield API('user', 'PUT', payload.payload)
    if (resp.status == 200) {
        let response = resp.body
        console.log('editprofile', resp.body)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CHANGE_PROFILE_SUCCESS, message: resp.body.message, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CHANGE_PROFILE_FAILURE, message: resp.body.errors })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.CHANGE_PROFILE_FAILURE, message: resp.body.Message })
    }

}

export function* forgotPasswordHandler(payload) {
    yield put({ type: actions.LOADER, loading: true })
    const res = yield API(`password/email`, 'POST', payload.payload);
    if (res.status === 200) {
        let resp = res.body;
        if (resp.status) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.FORGOT_PASSWORD_SUCCESS, message: resp.message })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.FORGOT_PASSWORD_FAILURE, message: res.body.message ? res.body.message : res.body.error })
        }
    }
    else {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.FORGOT_PASSWORD_FAILURE, message: res.body.Message ? res.body.Message : res.body.error })
    }
}

export function* changePasswordHandler(payload) {
    yield put({ type: actions.LOADER, loading: true })
    const res = yield API(`change_password`, 'POST', payload.payload);
    if (res.status === 200) {
        let resp = res.body;
        if (resp.status) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CHANGE_PASSWORD_SUCCESS, message: resp.message })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CHANGE_PASSWORD_FAILURE, message: res.body.errors })
        }
    }
    else {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.CHANGE_PASSWORD_FAILURE, message: res.body.Message ? res.body.Message : res.body.errors })
    }
}

export function* contactUsHandler(payload) {
    yield put({ type: actions.LOADER, loading: true })
    const res = yield API(`contact_us`, 'POST', payload.payload);
    console.log('contact res', res)
    if (res.status === 200) {
        let resp = res.body;
        if (resp.status) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CONTACT_US_SUCCESS, message: resp.message, payload: resp })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CONTACT_US_FAILURE, message: res.body.message ? res.body.message : res.body.error })
        }
    }
    else {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.CONTACT_US_FAILURE, message: res.body.Message ? res.body.Message : res.body.error })
    }
}

export function* logoutHandler(payload) {
    const resp = yield API('auth/logout', 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('logOUT', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.LOGOUT_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.LOGOUT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.LOGOUT_FAILURE, message: resp.body.Message })
    }
}


export function* getCategoriesHandler(payload) {
    const resp = yield API('category', 'GET', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_CATEGORIES_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_CATEGORIES_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_CATEGORIES_FAILURE, message: resp.body.Message })
    }
}

export function* getLanguagesHandler(payload) {
    const resp = yield API('languages', 'GET', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_LANGUAGES_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_LANGUAGES_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_LANGUAGES_FAILURE, message: resp.body.Message })
    }
}

export function* emailUpdateHandler(payload) {
    const resp = yield API('user/emailUpdate', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EMAIL_UPDATE_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EMAIL_UPDATE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.EMAIL_UPDATE_FAILURE, message: resp.body.Message })
    }
}

export function* phoneUpdateHandler(payload) {
    const resp = yield API('user/phoneUpdate', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PHONE_UPDATE_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PHONE_UPDATE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.PHONE_UPDATE_FAILURE, message: resp.body.Message })
    }
}

export function* passportUpdateHandler(payload) {
    const resp = yield API('user/passportUpdate', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PASSPORT_UPDATE_SUCCESS, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PASSPORT_UPDATE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.PASSPORT_UPDATE_FAILURE, message: resp.body.Message })
    }
}

export function* emailUpdateOtpHandler(payload) {
    const resp = yield API('user/emailUpdate/otp', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EMAIL_UPDATE_OTP_SUCCESS, message: response.message, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EMAIL_UPDATE_OTP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.EMAIL_UPDATE_OTP_FAILURE, message: resp.body.Message })
    }
}

export function* phoneUpdateOtpHandler(payload) {
    const resp = yield API('user/phoneUpdate/otp', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PHONE_UPDATE_OTP_SUCCESS, message: response.message, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PHONE_UPDATE_OTP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.PHONE_UPDATE_OTP_FAILURE, message: resp.body.Message })
    }
}

export function* passportUpdateOtpHandler(payload) {
    const resp = yield API('user/passportUpdate/otp', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PASSPORT_UPDATE_OTP_SUCCESS, message: response.message, payload: resp.body })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.PASSPORT_UPDATE_OTP_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.PASSPORT_UPDATE_OTP_FAILURE, message: resp.body.Message })
    }
}

export function* skillsUpdateHandler(payload) {
    const resp = yield API('user/skillsUpdate', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.SKILLS_UPDATE_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.SKILLS_UPDATE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.SKILLS_UPDATE_FAILURE, message: resp.body.Message })
    }
}

export function* notifyProblemAlertHandler(payload) {
    const resp = yield API('user/problemAlerts', 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.NOTIFY_PROBLEM_ALERT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.NOTIFY_PROBLEM_ALERT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.NOTIFY_PROBLEM_ALERT_FAILURE, message: resp.body.Message })
    }
}

export function* getProblemAlertHandler(payload) {
    const resp = yield API('user/problemAlerts', 'GET', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_PROBLEM_ALERT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_PROBLEM_ALERT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_PROBLEM_ALERT_FAILURE, message: resp.body.Message })
    }
}

export function* addProblemAlertHandler(payload) {
    const resp = yield API('user/problemAlerts', 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('add problem alert', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_PROBLEM_ALERT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_PROBLEM_ALERT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.ADD_PROBLEM_ALERT_FAILURE, message: resp.body.Message })
    }
}

export function* deleteProblemAlertHandler(payload) {
    const resp = yield API(`user/problemAlerts/${payload.payload.id}`, 'DELETE', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.DELETE_PROBLEM_ALERT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.DELETE_PROBLEM_ALERT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.DELETE_PROBLEM_ALERT_FAILURE, message: resp.body.Message })
    }
}

export function* createJobHandler(payload) {
    const resp = yield API(`job`, 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CREATE_JOB_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CREATE_JOB_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.CREATE_JOB_FAILURE, message: resp.body.Message })
    }
}

export function* editJobHandler(payload) {
    const resp = yield API(`job/${AppConstant.jobId}`, 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EDIT_JOB_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EDIT_JOB_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.EDIT_JOB_FAILURE, message: resp.body.Message })
    }
}

export function* deleteJobHandler(payload) {
    const resp = yield API(`job/${AppConstant.jobId}`, 'DELETE', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.DELETE_JOB_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.DELETE_JOB_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.DELETE_JOB_FAILURE, message: resp.body.Message })
    }
}

export function* cancelJobHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}/cancel`, 'PUT', payload.payload.info)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CANCEL_JOB_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CANCEL_JOB_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.CANCEL_JOB_FAILURE, message: resp.body.Message })
    }
}

export function* getJobHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_JOB_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_JOB_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_JOB_FAILURE, message: resp.body.Message })
    }
}

export function* getClientListHandler(payload) {
    console.log('PAYLOADDD', payload.payload);
    const resp = yield API(`job/toSolveList?${payload.payload}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_CLIENT_LIST_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_CLIENT_LIST_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_CLIENT_LIST_FAILURE, message: resp.body.Message })
    }
}

export function* getSolverListHandler(payload) {
    console.log('PAYLOADDD', payload.payload);
    const resp = yield API(`job/toSolveList?${payload.payload}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_SOLVER_LIST_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_SOLVER_LIST_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_SOLVER_LIST_FAILURE, message: resp.body.Message })
    }
}

export function* addPortfolioImageHandler(payload) {
    const resp = yield API(`media`, 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_PORTFOLIO_IMAGE_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_PORTFOLIO_IMAGE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.ADD_PORTFOLIO_IMAGE_FAILURE, message: resp.body.Message })
    }
}

export function* getPortfolioImagesHandler(payload) {
    const resp = yield API(`media?kind=Portfolio`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_PORTFOLIO_IMAGES_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_PORTFOLIO_IMAGES_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_PORTFOLIO_IMAGES_FAILURE, message: resp.body.Message })
    }
}

export function* deletePortfolioImageHandler(payload) {
    const resp = yield API(`media?kind=Portfolio&mediaId=${payload.payload.id}`, 'DELETE')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('status', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.DELETE_PORTFOLIO_IMAGE_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.DELETE_PORTFOLIO_IMAGE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.DELETE_PORTFOLIO_IMAGE_FAILURE, message: resp.body.Message })
    }
}

export function* getUserProfileHandler(payload) {
    const resp = yield API(`user`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('GET PROFILE', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_USER_PROFILE_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_USER_PROFILE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_USER_PROFILE_FAILURE, message: resp.body.Message })
    }
}

export function* getOtherUserProfileHandler(payload) {
    const resp = yield API(`user/${payload.payload.id}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('GET OTHER PROFILE', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_OTHER_USER_PROFILE_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_OTHER_USER_PROFILE_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_OTHER_USER_PROFILE_FAILURE, message: resp.body.Message })
    }
}

export function* jobOfferAddHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}/jobOffer`, 'POST', payload.payload.offerInfo)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('JOB offer', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_ADD_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_ADD_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_OFFER_ADD_FAILURE, message: resp.body.Message })
    }
}

export function* jobOfferEditHandler(payload) {
    const resp = yield API(`jobOffer/${payload.payload.id}`, 'PUT', payload.payload.offerInfo)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job offer edit', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_EDIT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_EDIT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_OFFER_EDIT_FAILURE, message: resp.body.Message })
    }
}

export function* jobOfferListHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}/jobOffer`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job offer list', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_JOB_OFFER_LIST_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_JOB_OFFER_LIST_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_JOB_OFFER_LIST_FAILURE, message: resp.body.Message })
    }
}

export function* jobOfferAcceptHandler(payload) {
    const resp = yield API(`jobOffer/${payload.payload.id}/accept`, 'PUT', payload.payload.info)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job offer ACCEPT', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_ACCEPT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_ACCEPT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_OFFER_ACCEPT_FAILURE, message: resp.body.Message })
    }
}

export function* jobOfferCancelHandler(payload) {
    const resp = yield API(`jobOffer/${payload.payload.id}/cancel`, 'PUT', payload.payload.info)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job offer cancel', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_CANCEL_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_OFFER_CANCEL_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_OFFER_CANCEL_FAILURE, message: resp.body.Message })
    }
}

export function* jobSolvedHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}/jobOffer/${payload.payload.offerId}/solve`, 'PUT')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job SOLVED', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_SOLVED_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_SOLVED_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_SOLVED_FAILURE, message: resp.body.Message })
    }
}

export function* jobInvitedHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}/jobOffer/invite`, 'POST', payload.payload.info)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job INVITED', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_INVITED_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_INVITED_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_INVITED_FAILURE, message: resp.body.Message })
    }
}

export function* jobQuestionAddHandler(payload) {
    const resp = yield API(`jobQuestion`, 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job QUESTION', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_QUESTION_ADD_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_QUESTION_ADD_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_QUESTION_ADD_FAILURE, message: resp.body.Message })
    }
}

export function* jobQuestionListHandler(payload) {
    const resp = yield API(`jobQuestion?jobId=${payload.payload.id}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job QUESTION get', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_QUESTION_LIST_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_QUESTION_LIST_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_QUESTION_LIST_FAILURE, message: resp.body.Message })
    }
}

export function* jobBookmarkHandler(payload) {
    const resp = yield API(`job/${payload.payload.id}/bookmark`, 'PUT', payload.payload.bookmarkInfo)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('job bookmark', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_BOOKMARK_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.JOB_BOOKMARK_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.JOB_BOOKMARK_FAILURE, message: resp.body.Message })
    }
}

export function* addReviewHandler(payload) {
    const resp = yield API(`review`, 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('ADD REVIEW', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_REVIEW_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_REVIEW_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.ADD_REVIEW_FAILURE, message: resp.body.Message })
    }
}

export function* getReviewHandler(payload) {
    const resp = yield API(`review/user/${payload.payload.id}?receiverType=${payload.payload.receiverType}&limit=${payload.payload.limit}&offset=${payload.payload.offset}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('ADD REVIEW', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_REVIEW_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_REVIEW_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_REVIEW_FAILURE, message: resp.body.Message })
    }
}

export function* getSolverReviewHandler(payload) {
    const resp = yield API(`review/user/${payload.payload.id}?receiverType=${'Solver'}&limit=${payload.payload.limit}&offset=${payload.payload.offset}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('ADD REVIEW', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_SOLVER_REVIEW_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_SOLVER_REVIEW_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_SOLVER_REVIEW_FAILURE, message: resp.body.Message })
    }
}

export function* addSupportHandler(payload) {
    const resp = yield API(`support`, 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('ADD_SUPPORT', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_SUPPORT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.ADD_SUPPORT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.ADD_SUPPORT_FAILURE, message: resp.body.Message })
    }
}

export function* closeSupportHandler(payload) {
    const resp = yield API(`support/${payload.payload.id}`, 'PUT')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('CLOSE_SUPPORT', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CLOSE_SUPPORT_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.CLOSE_SUPPORT_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.CLOSE_SUPPORT_FAILURE, message: resp.body.Message })
    }
}

export function* getSupportListHandler(payload) {
    const resp = yield API(`support?${payload.payload}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('GET_SUPPORT_LIST', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_SUPPORT_LIST_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.GET_SUPPORT_LIST_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.GET_SUPPORT_LIST_FAILURE, message: resp.body.Message })
    }
}

export function* supportChatListHandler(payload) {
    const resp = yield API(`support/${payload.payload.id}?limit=${1000000000}&offset=${0}`, 'GET')
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('SUPPORT_LIST', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.SUPPORT_CHAT_LIST_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.SUPPORT_CHAT_LIST_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.SUPPORT_CHAT_LIST_FAILURE, message: resp.body.Message })
    }
}

export function* editUserAddressHandler(payload) {
    const resp = yield API(`user/address`, 'PUT', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('EDIT ADDRESS', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EDIT_USER_ADDRESS_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EDIT_USER_ADDRESS_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.EDIT_USER_ADDRESS_FAILURE, message: resp.body.Message })
    }
}

export function* editSpokenLanguagesHandler(payload) {
    const resp = yield API(`languages`, 'POST', payload.payload)
    yield put({ type: actions.LOADER, loading: true })
    if (resp.status == 200) {

        let response = resp.body
        console.log('EDIT SPOKEN LANGUAGE', response)
        if (response.statusCode === 200 || response.statusCode === 201) {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EDIT_SPOKEN_LANGUAGES_SUCCESS, message: response.message, payload: resp.body.data })
        }
        else {
            yield put({ type: actions.LOADER, loading: false })
            yield put({ type: actions.EDIT_SPOKEN_LANGUAGES_FAILURE, message: response.message })
        }
    }
    else if (resp.body.status == 400) {
        yield put({ type: actions.LOADER, loading: false })
        yield put({ type: actions.EDIT_SPOKEN_LANGUAGES_FAILURE, message: resp.body.Message })
    }
}

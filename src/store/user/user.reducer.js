import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // SIGN IN
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return { ...state, isLoading: true, error: null };

    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return { ...state, isLoading: true, error: null };

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, isLoading: false };

    case USER_ACTION_TYPES.SIGN_IN_FAIL:
      return { ...state, error: payload, isLoading: false };

    // SIGN UP
    case USER_ACTION_TYPES.SIGN_UP_START:
      return { ...state, isLoading: true, error: null };

    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return { ...state, isLoading: false };

    case USER_ACTION_TYPES.SIGN_UP_FAIL:
      return { ...state, error: payload, isLoading: false };

    // SIGN OUT
    case USER_ACTION_TYPES.SIGN_OUT_START:
      return { ...state, isLoading: true, error: null };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, isLoading: false, currentUser: null };

    case USER_ACTION_TYPES.SIGN_OUT_FAIL:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};

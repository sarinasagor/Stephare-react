import { createSlice } from "@reduxjs/toolkit";
import { apiService } from "../../hooks/axios";
import { Cookies } from "react-cookie"; 

const cookies = new Cookies();

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: true,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      cookies.remove("jwtToken", { path: "/" });
      cookies.remove("user", { path: "/" });
    },
    authLoaded: (state) => {
      state.loading = false;
    },
    setLoginError(state, action) {
      state.error = action.payload;
    },
    clearLoginError(state) {
      state.error = null;
    },
  },
});

export const { loginSuccess, logoutSuccess, authLoaded, setLoginError, clearLoginError  } = authSlice.actions;

// Action to restore authentication from cookies
export const restoreAuth = () => async (dispatch) => {
  const token = cookies.get("jwtToken");
  const user = cookies.get("user") ? cookies.get("user") : null;
  if (token && user) {
    try {
      const response = await apiService.post(
        "/jwt-auth/v1/token/validate",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(loginSuccess({ user, token }));
      } else {
        dispatch(logoutSuccess());
      }
    } catch (error) {
      console.error(
        "Token validation failed:",
        error.response ? error.response.data : error.message
      );
      dispatch(logoutSuccess());
    }
  } else {
    dispatch(logoutSuccess());
  }
};

export default authSlice.reducer;

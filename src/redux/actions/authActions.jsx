import { loginSuccess, logoutSuccess } from "../slices/authSlice";
import { useApiService } from "../../hooks/axios";
import { Cookies } from "react-cookie"; // Import Cookies directly

// Create a Cookies instance
const cookies = new Cookies();

// Login Action
export const login = (credentials) => async (dispatch) => {
    try {
        const apiService = useApiService();
        const response = await apiService.post(
            "/jwt-auth/v1/token",
            credentials
        );

        const { token, user_display_name, user_id } = response.data;

        const setUser = {
            name: user_display_name,
            id: user_id,
        };

        // Use the cookies instance to set cookies
        cookies.set("jwtToken", token, { secure: true, sameSite: "Strict" });
        cookies.set("user", JSON.stringify(setUser), {
            secure: true,
            sameSite: "Strict",
        });

        dispatch(loginSuccess({ user: setUser, token }));
    } catch (error) {
        console.error(
            "Login failed:",
            error.response ? error.response.data : error.message
        );
        cookies.remove("jwtToken");
        cookies.remove("user");
    }
};

// Signup Action
export const sign_up = (userData) => async (dispatch) => {
    try {
        const apiService = useApiService();
        const response = await apiService.post("/register", userData);
        const { token } = response.data;

        // Use the cookies instance to set cookies
        cookies.set("jwtToken", token, { secure: true, sameSite: "Strict" });

        dispatch(loginSuccess({ token }));
    } catch (error) {
        console.error(
            "Signup failed:",
            error.response ? error.response.data : error.message
        );
    }
};

// Logout Action
export const logout = () => (dispatch) => {
    dispatch(logoutSuccess());
    cookies.remove("jwtToken");
    cookies.remove("user");
};

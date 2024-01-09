/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, January 2024
 * * Even if this has added something to the code, don't remove it
 */
import { auth, msServices } from ".";

// In case of no session in AuthMs, redirect the application to this url
// Don't forget to change the last part of the url "/export" according to your application
const LoginUrl = "https://login.kapsulteknoloji.org/logger";

// Check session in AuthMs
const checkForAuth = async () => {
  try {
    const res = await auth.get(`/user/check`);
    return res.data.result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Check session in LoggerMS
export const checkForLogger = async () => {
  try {
    const res = await msServices.get(`/auth/check`);
    return res.data.result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Request a token from AuthMs and log in to LoggerMs
const login = async () => {
  try {
    const tokenResponse = await auth.get("/user/token", {
      params: {
        moduleName: "logger",
      },
    });
    const token = tokenResponse.data.token;

    if (token) {
      const response = await msServices.post("/auth/login", {
        token: token,
      });

      return response.data.result as boolean;
    }
  } catch (error) {
    console.error("Take Token and Login Ms error:", error);
    return false;
  }
};

// Logout for AuthMs
const logoutForAuth = async () => {
  try {
    const res = await auth.post(`/user/logout`);
    if (res.data.result) return res.data.result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Logout for LoggerMs
const logoutForLogger = async () => {
  try {
    const res = await msServices.get(`/auth/logout`);
    if (res.data.result) return res.data.result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Login function
export const Login = async () => {
  let temp = await login();
  if (temp) return true;
  else alert("Hata! Mikroservise giriş yapılamadı.");
};

// Function that controls the session
export const Check = async () => {
  // Check for AuthMs
  let authCheck = (await checkForAuth()) as boolean;
  if (authCheck) {
    // Check for LoggerMS
    if (!(await checkForLogger())) return Login();
    else return true;
  }
  // Go to login.kapsulteknoloji.org/export
  else window.location.href = LoginUrl;
};

// Logout function from AuthMs and LoggerMs
export const Logout = async () => {
  let auth = await logoutForAuth();
  let logger = await logoutForLogger();

  if (auth && logger) {
    window.location.href = LoginUrl;
  } else {
    alert("Hata! Çıkış yapılamadı.");
  }
};

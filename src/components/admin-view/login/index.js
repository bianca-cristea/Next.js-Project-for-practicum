"use client";

import { useState, useEffect } from "react";
import FormControls from "../form-controls";
import { resetPassword, login } from "@/services";
import AdminView from "@/app/admin/page";

const controls = [
  { name: "email", placeholder: "Enter email", type: "text", label: "Email:" },
  {
    name: "password",
    placeholder: "Enter password",
    type: "password",
    label: "Password:",
  },
];

const initialResetPasswordData = {
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function Login({ formData, setFormData, handleLogin }) {
  const [resetPasswordFormData, setResetPasswordFormData] = useState(
    initialResetPasswordData
  );
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowResetPasswordForm = () => {
    setShowResetPasswordForm(true);
  };

  const handleHideResetPasswordForm = () => {
    setShowResetPasswordForm(false);
    setResetPasswordSuccess(false);
    setResetPasswordError("");
  };

  const handleResetPassword = async () => {
    if (
      resetPasswordFormData.newPassword !==
      resetPasswordFormData.confirmPassword
    ) {
      setResetPasswordError("Passwords do not match!");
      return;
    }

    const res = await resetPassword(resetPasswordFormData);
    if (res?.success) {
      setResetPasswordSuccess(true);
      setResetPasswordError("");
    } else {
      setResetPasswordError(res?.message || "Error resetting password");
    }
  };

  useEffect(() => {
    console.log("formData:", formData);
    console.log("controls:", controls);
    setFormData({ email: "", password: "" });
  }, []);

  if (isLoggedIn) {
    return <AdminView />;
  }

  if (showResetPasswordForm) {
    return (
      <div className="w-full">
        <h1 className="pt-4 pl-7 text-blue-700 text-xl">Reset Password</h1>
        <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={resetPasswordFormData.email}
              onChange={(e) =>
                setResetPasswordFormData({
                  ...resetPasswordFormData,
                  email: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="oldPassword"
              className="block text-sm font-bold mb-2"
            >
              Old Password:
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              placeholder="Enter old password"
              value={resetPasswordFormData.oldPassword}
              onChange={(e) =>
                setResetPasswordFormData({
                  ...resetPasswordFormData,
                  oldPassword: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-bold mb-2"
            >
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter new password"
              value={resetPasswordFormData.newPassword}
              onChange={(e) =>
                setResetPasswordFormData({
                  ...resetPasswordFormData,
                  newPassword: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold mb-2"
            >
              Confirm New Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={resetPasswordFormData.confirmPassword}
              onChange={(e) =>
                setResetPasswordFormData({
                  ...resetPasswordFormData,
                  confirmPassword: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
            />
          </div>

          {resetPasswordError && (
            <div className="text-red-500 text-sm">{resetPasswordError}</div>
          )}

          {resetPasswordSuccess && (
            <div className="text-green-500 text-sm">
              Password reset successful!
            </div>
          )}

          <button
            onClick={handleResetPassword}
            className="mt-4 border hover:bg-blue-700 hover:text-white border-blue-700 p-4 font-bold text-[16px] transition-colors duration-300 ease-in-out"
          >
            Reset Password
          </button>

          <div className="mt-4 text-center">
            <a
              href="#"
              onClick={handleHideResetPasswordForm}
              className="text-blue-700 hover:text-blue-900"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="p-4 text-blue-700 text-xl">Login</h1>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        {loginError && (
          <div className="mt-2 p-2 bg-red-100 text-red-700 rounded">
            {loginError}
          </div>
        )}
        <button
          onClick={handleLogin}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white-500 border-blue-700 p-4 font-bold text-[16px] transition-colors duration-300 ease-in-out"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <a
            href="#"
            onClick={handleShowResetPasswordForm}
            className="text-blue-700 hover:text-blue-900"
          >
            Reset Password?
          </a>
        </div>
      </div>
    </div>
  );
}

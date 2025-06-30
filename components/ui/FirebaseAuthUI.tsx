"use client";
import { auth } from "@/lib/firebase";
import { EmailAuthProvider, GoogleAuthProvider, PhoneAuthProvider, RecaptchaVerifier } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";

let ui: firebaseui.auth.AuthUI | undefined;
let recaptchaVerifier: RecaptchaVerifier | undefined;

export default function FirebaseAuthUI() {
  useEffect(() => {
    // Initialize RecaptchaVerifier if not already initialized
    if (!recaptchaVerifier) {
      const recaptchaContainerId = "recaptcha-container";
      // Only check if the container exists, but pass the string ID to RecaptchaVerifier
      if (document.getElementById(recaptchaContainerId)) {
        recaptchaVerifier = new (RecaptchaVerifier as any)(
          recaptchaContainerId as string,
          {
            size: "invisible",
            callback: (response: any) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            },
          },
          auth
        );
      }
    }

    if (!ui) {
      ui = new firebaseui.auth.AuthUI(auth);
    }

    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          scopes: ["email"],
        },
        {
          provider: PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "IN",
          recaptchaParameters: {
            type: "image", // or 'audio'
            size: "invisible", // or 'normal' or 'compact'
            badge: "bottomleft", // 'bottomright' or 'inline' can be used
          },
        },
        {
          provider: EmailAuthProvider.PROVIDER_ID,
        },
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: () => {
          return false; // prevents redirect
        },
      },
    });

    // Cleanup on unmount
    return () => {
      recaptchaVerifier?.clear();
    };
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome</h1>
      <div id="firebaseui-auth-container" />
      {/* Container for reCAPTCHA */}
      <div id="recaptcha-container" />
    </div>
  );
}

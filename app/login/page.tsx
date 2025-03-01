"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleAuth = async () => {
    setLoading(true);
    try {
      let response;
      if (isLogin) {
        response = await supabase.auth.signInWithPassword({ email, password });
      } else {
        response = await supabase.auth.signUp({ email, password });
      }

      if (response.error) throw response.error;
      alert(isLogin ? "Logged in successfully!" : "Signup successful! Check your email.");
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) alert(error.message);
    else router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg w-96">
        <img src="/logo.png" alt="UrbanEco Logo" className="mb-4 h-16" />
        <h2 className="text-3xl font-semibold text-gray-700">{isLogin ? "Login" : "Register"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 p-3 border border-gray-300 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 p-3 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleAuth}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Register"}
        </button>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
        >
          Sign in with Google
        </button>
        <p
          className="mt-4 text-sm text-blue-500 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

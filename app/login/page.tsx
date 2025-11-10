"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [role, setRole] = useState("user");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Logging in as ${role}: ${username}`);
    };

    // ✅ Use typed Variants (no inline function)
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-16 border border-gray-100"
            >
                {/* Logo Section */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    className="flex flex-col items-center mb-8"
                >
                    <div className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ rotate: [0, 5, -5, 0], scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center shadow-md"
                        >
                            <span className="text-white font-bold text-lg">H</span>
                        </motion.div>
                        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
                            HBS
                        </h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-sm mt-1"
                    >
                        Industrial Systems
                    </motion.p>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-center text-gray-800 mb-6"
                >
                    Sign in to your account
                </motion.h2>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="space-y-5"
                >
                    {/* Role Dropdown */}
                    <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Role
                        </label>
                        <div className="relative">
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full appearance-none p-3 rounded-md bg-gray-50 border border-gray-300 
                           text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition 
                           hover:border-blue-300 shadow-sm"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <motion.span
                                animate={{ y: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
                            >
                                ▼
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Username */}
                    <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 
                         text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </motion.div>

                    {/* Password */}




                    {/* Password Field */}
                    <motion.div variants={fadeUp}>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full p-3 pr-10 rounded-md bg-gray-50 border border-gray-300 
                 text-gray-800 placeholder-gray-400 focus:outline-none 
                 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            />

                            {/* Eye Icon */}
                            <motion.button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </motion.button>
                        </div>
                    </motion.div>


                    {/* Submit Button */}
                    <motion.div variants={fadeUp}>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium shadow-md transition focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        >
                            Sign In
                        </motion.button>
                    </motion.div>
                </motion.form>

                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between items-center mt-6 text-sm text-gray-500"
                >
                    <a href="#" className="hover:text-blue-600 transition">
                        Forgot password?
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                        Create account
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}

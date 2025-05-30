import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Bỏ kiểu (e: React.FormEvent)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password, rememberMe });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Đăng nhập</h2>
                        <p className="text-gray-600">Đăng nhập để truy cập tài khoản BloodConnect của bạn</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Đăng nhập</h3>
                        <p className="text-gray-600 text-sm mb-6">Nhập thông tin đăng nhập của bạn để tiếp tục</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-600 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mật khẩu
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blood-600 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 text-blood-600 focus:ring-blood-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>
                                <Link to="/forgot-password" className="text-sm text-blood-600 hover:text-blood-700">
                                    Quên mật khẩu?
                                </Link>
                            </div>

                                <button
                                    type="submit"
                                className="text-blood-600 hover:text-blood-700 font-medium block mx-auto"
                                >
                                    Đăng nhập
                                </button>
                      
                            <p className="text-center text-sm text-gray-600">
                                Chưa có tài khoản?{' '}
                                <Link to="/register" className="text-blood-600 hover:text-blood-700 font-medium">
                                    Đăng ký
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;

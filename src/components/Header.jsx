import React from 'react';
import { Heart, Home, Search, BookOpen, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

const Header = () => {
    // const { user, isAuthenticated, logout } = useAuth();

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blood-600 rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-white fill-current" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">BloodConnect</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blood-600 transition-colors">
                            <Home className="w-4 h-4" />
                            <span>Trang chủ</span>
                        </Link>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-blood-600 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            <span>Hiến máu</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-blood-600 transition-colors cursor-pointer">
                            <Search className="w-4 h-4" />
                            <span>Tìm kiếm</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-blood-600 transition-colors cursor-pointer">
                            <BookOpen className="w-4 h-4" />
                            <span>Blog</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-blood-600 transition-colors cursor-pointer">
                            <User className="w-4 h-4" />
                            <span>Liên hệ</span>
                        </div>
                    </nav>

                    {/* Auth Section */}
                    {/* <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Xin chào, {user?.fullName}</span>
                                <button
                                    onClick={logout}
                                    className="flex items-center space-x-1 text-gray-700 hover:text-blood-600 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Đăng xuất</span>
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-blood-600 font-medium transition-colors"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    to="/register"
                                        className="text-gray-700 hover:text-blood-600 font-medium transition-colors"
                                >
                                    Đăng ký
                                </Link>
                            </>
                        )}
                    </div> */}

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="text-gray-700 hover:text-blood-600 font-medium transition-colors"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to="/register"
                            className="text-gray-700 hover:text-blood-600 font-medium transition-colors"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

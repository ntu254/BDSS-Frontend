// Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import AuthService from '../services/AuthService'; // Import the service

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '', 
        citizenId: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setError(''); 
        setSuccessMessage(''); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu xác nhận không khớp!');
            return;
        }
        if (!formData.agreeTerms) {
            setError('Bạn phải đồng ý với Điều khoản sử dụng và Chính sách bảo mật.');
            return;
        }

        setLoading(true);
        console.log('Register attempt:', formData);

        try {           
            const responseMessage = await AuthService.register(
                formData.fullName,
                formData.email,
                formData.password,
                formData.citizenId
            );
            setLoading(false);
            setSuccessMessage(responseMessage || "Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (err) {
            setLoading(false);
            setError(err.message || "Đăng ký thất bại. Vui lòng thử lại.");
            console.error("Registration error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Đăng ký tài khoản</h2>
                        <p className="text-gray-600">Tạo tài khoản để tham gia cộng đồng hiến máu</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Đăng ký tài khoản</h3>
                        <p className="text-gray-600 text-sm mb-6">Điền thông tin của bạn để tạo tài khoản mới</p>

                        {error && <p className="mb-4 text-sm text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
                        {successMessage && <p className="mb-4 text-sm text-green-600 bg-green-100 p-3 rounded-md">{successMessage}</p>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                                <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleInputChange} placeholder="Nguyễn Văn A" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" required disabled={loading} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" required disabled={loading} />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="0901234567" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" disabled={loading} />                                   
                                </div>
                            </div>
                            <div>
                                <label htmlFor="citizenId" className="block text-sm font-medium text-gray-700 mb-1">CMND/CCCD</label>
                                <input id="citizenId" name="citizenId" type="text" value={formData.citizenId} onChange={handleInputChange} placeholder="Nhập số CMND/CCCD" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" required disabled={loading} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                                    <div className="relative">
                                        <input id="password" name="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" required disabled={loading} />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700" disabled={loading}>
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
                                    <div className="relative">
                                        <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleInputChange} placeholder="••••••••" className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" required disabled={loading} />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700" disabled={loading}>
                                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleInputChange} className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded mt-1" disabled={loading} />
                                <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                                    Tôi đồng ý với{' '} <a href="#" className="text-blue-600 hover:text-blue-500">Điều khoản sử dụng</a> {' '}và{' '} <a href="#" className="text-blue-600 hover:text-blue-500">Chính sách bảo mật</a>
                                </label>
                            </div>
                            <button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50">
                                {loading ? 'Đang xử lý...' : 'Đăng ký'}
                            </button>
                            <p className="text-center text-sm text-gray-600">
                                Đã có tài khoản?{' '}
                                <Link to={loading ? "#" : "/login"} className={`font-medium text-red-500 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:text-red-700'}`}>
                                    Đăng nhập
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

export default Register;
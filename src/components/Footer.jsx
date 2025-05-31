import React from 'react';
import { Heart, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-pink-50 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blood-600 rounded-full flex items-center justify-center">
                                <Heart className="w-5 h-5 text-white fill-current" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">BloodConnect</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Kết nối yêu thương, chia sẻ sự sống. Chúng tôi kết nối người hiến máu với những người cần máu, mang lại hy vọng và sự sống.
                        </p>
                        <div className="flex space-x-3">
                            <Facebook className="w-5 h-5 text-gray-400 hover:text-blood-600 cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-gray-400 hover:text-blood-600 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">LIÊN KẾT</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Trang chủ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Loại máu</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Đăng ký hiến máu</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Đăng ký khẩn cấp</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">HỖ TRỢ</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Liên hệ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Chính sách bảo mật</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blood-600 transition-colors">Điều khoản sử dụng</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-blood-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">TP. Hồ Chí Minh</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-blood-600" />
                                <span className="text-gray-600 text-sm">+84 912345678</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-blood-600" />
                                <span className="text-gray-600 text-sm">@fpt.edu.vn</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-500 text-sm">
                        © 2025 BloodConnect. Tất cả quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
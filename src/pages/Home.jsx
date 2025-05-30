import React from 'react';
import { Heart, Users, MapPin, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blood-50 to-pink-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Kết nối yêu thương, <br />
                            <span className="text-blood-600">Chia sẻ sự sống</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            BloodConnect kết nối người hiến máu với những người cần máu, tạo nên một cộng đồng
                            chia sẻ yêu thương và mang lại hy vọng cho cuộc sống.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/register"
                                className="border border-blood-600 text-blood-600 px-8 py-3 rounded-lg hover:bg-blood-50 transition-colors font-medium"
                            >
                                Tham gia ngay
                            </Link>
                            <Link
                                to="/login"
                                className="border border-blood-600 text-blood-600 px-8 py-3 rounded-lg hover:bg-blood-50 transition-colors font-medium"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Tại sao chọn BloodConnect?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Chúng tôi cung cấp nền tảng an toàn, tiện lợi để kết nối cộng đồng hiến máu
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-blood-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blood-200 transition-colors">
                                <Heart className="w-8 h-8 text-blood-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hiến máu dễ dàng</h3>
                            <p className="text-gray-600 text-sm">Đăng ký hiến máu chỉ với vài thao tác đơn giản</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-blood-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blood-200 transition-colors">
                                <Users className="w-8 h-8 text-blood-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cộng đồng lớn mạnh</h3>
                            <p className="text-gray-600 text-sm">Kết nối với hàng nghìn người hiến máu tình nguyện</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-blood-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blood-200 transition-colors">
                                <MapPin className="w-8 h-8 text-blood-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tìm kiếm nhanh chóng</h3>
                            <p className="text-gray-600 text-sm">Tìm người hiến máu gần bạn một cách nhanh chóng</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-blood-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blood-200 transition-colors">
                                <Shield className="w-8 h-8 text-blood-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">An toàn bảo mật</h3>
                            <p className="text-gray-600 text-sm">Thông tin cá nhân được bảo mật tuyệt đối</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-blood-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-red-500 mb-2">10,000+</div>
                            <div className="text-blood-100">Người hiến máu</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-red-500 mb-2">5,000+</div>
                            <div className="text-blood-100">Lần hiến máu thành công</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
                            <div className="text-blood-100">Bệnh viện đối tác</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Sẵn sàng cứu sống một cuộc đời?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Tham gia cộng đồng BloodConnect ngay hôm nay và trở thành một phần của những điều kỳ diệu
                    </p>
                    <Link
                        to="/register"
                        className="bg-blood-600 text-white px-8 py-3 rounded-lg hover:bg-blood-700 transition-colors font-medium inline-flex items-center"
                    >
                        Đăng ký ngay
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
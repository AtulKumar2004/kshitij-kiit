import { useState } from 'react';
import { Heart, Sparkles, Star, Droplets, HandHeart, Shield, Target } from 'lucide-react';

const AboutUs = () => {
    const [hoveredBubble, setHoveredBubble] = useState(null);

    return (
        <section id="about" className="relative min-h-screen overflow-hidden pt-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/image.png')",
                }}
            />

            {/* Bubbles Container */}
            <div className="relative z-10 w-full h-screen pt-8">

                {/* Instruction Text */}
                <div className="absolute top-[26%] left-[3%] max-w-xs">
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-3 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                            About <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">Us</span>
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mb-4" />
                        <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            Three seekers. Three sparks of purpose.
                            Hover over the <span className="text-amber-300 font-semibold">bubbles</span>  to uncover our Mission, our Vision, and the Values that light our way.
                        </p>
                    </div>
                </div>

                {/* Bubble 1 - Left Person (Mission) */}
                <div
                    className="absolute top-[4%] left-[35%] cursor-pointer"
                    onMouseEnter={() => setHoveredBubble('mission')}
                    onMouseLeave={() => setHoveredBubble(null)}
                >
                    <img
                        src="/bubble.png"
                        alt="Mission Bubble"
                        className="w-10 h-10 md:w-14 md:h-14 opacity-80 hover:opacity-100 transition-all hover:scale-110 animate-float"
                    />

                    {/* Mission Content */}
                    {hoveredBubble === 'mission' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-amber-300 animate-fade-in">
                            <div className="flex items-center gap-3 mb-3">
                                <Heart className="w-8 h-8 text-orange-600" strokeWidth={2.5} />
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-800 font-medium leading-relaxed">
                                Fostering inner growth, mindfulness, and community connection through ancient wisdom applied to modern life.
                            </p>
                        </div>
                    )}
                </div>

                {/* Bubble 2 - Center Person (Vision) */}
                <div
                    className="absolute top-[1%] left-[55%] cursor-pointer"
                    onMouseEnter={() => setHoveredBubble('vision')}
                    onMouseLeave={() => setHoveredBubble(null)}
                >
                    <img
                        src="/bubble.png"
                        alt="Vision Bubble"
                        className="w-16 h-16 md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-all hover:scale-110 animate-float"
                        style={{ animationDelay: '0.5s' }}
                    />

                    {/* Vision Content */}
                    {hoveredBubble === 'vision' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-green-300 animate-fade-in">
                            <div className="flex items-center gap-3 mb-3">
                                <Sparkles className="w-8 h-8 text-green-600" strokeWidth={2.5} />
                                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-800 font-medium leading-relaxed">
                                To create a vibrant community where seekers explore their spiritual path and find peace in chaos.
                            </p>
                        </div>
                    )}
                </div>

                {/* Bubble 3 - Right Person (Values) */}
                <div
                    className="absolute top-[22%] right-[27%] cursor-pointer"
                    onMouseEnter={() => setHoveredBubble('values')}
                    onMouseLeave={() => setHoveredBubble(null)}
                >
                    <img
                        src="/bubble.png"
                        alt="Values Bubble"
                        className="w-16 h-16 md:w-10 md:h-10 opacity-80 hover:opacity-100 transition-all hover:scale-110 animate-float"
                        style={{ animationDelay: '1s' }}
                    />

                    {/* Values Content */}
                    {hoveredBubble === 'values' && (
                        <div className="absolute top-full right-0 mt-4 w-96 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-blue-300 animate-fade-in">
                            <div className="flex items-center gap-3 mb-4">
                                <Star className="w-8 h-8 text-blue-600 fill-blue-600" strokeWidth={2.5} />
                                <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <Droplets className="w-6 h-6 text-blue-600" strokeWidth={2} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Cleanliness</h4>
                                        <p className="text-xs text-gray-700">Purity</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <HandHeart className="w-6 h-6 text-green-600" strokeWidth={2} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Mercy</h4>
                                        <p className="text-xs text-gray-700">Compassion</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-indigo-600" strokeWidth={2} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Truthfulness</h4>
                                        <p className="text-xs text-gray-700">Integrity</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Target className="w-6 h-6 text-purple-600" strokeWidth={2} />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Austerity</h4>
                                        <p className="text-xs text-gray-700">Discipline</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default AboutUs;

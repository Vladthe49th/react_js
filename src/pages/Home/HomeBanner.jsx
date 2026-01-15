import bannerImg from '../../assets/home-banner.jpg';

export default function HomeBanner() {
    return (
        <section
            className="relative h-[400px] rounded-2xl overflow-hidden"
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white max-w-xl">
                <h1 className="text-4xl font-bold mb-4">
                    Turbomagazik
                </h1>
                <p className="text-lg">
                    Технології, одяг, хрумки, приємна компанія — все тут!
                </p>
            </div>
        </section>
    );
}

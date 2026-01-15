import HomeBanner from './HomeBanner';
import HomeFeatures from './HomeFeatures';
import PopularProducts from './PopularProducts';

export default function Home() {
    return (
        <div className="space-y-16">
            <HomeBanner />
            <HomeFeatures />
            <PopularProducts />
        </div>
    );
}

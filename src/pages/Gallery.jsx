import swans from '../assets/swans-reflecting-elephants.jpg'
import narcissus from '../assets/metamorphosis-of-narcissus.jpg'
import memory from '../assets/persistence-of-memory.jpg'
import PageWrapper from '../components/PageWrapper'
import '../styles/Page.css'

const paintings = [
    {
        id: 1,
        title: 'Постійність пам’яті',
        image: memory
    },
    {
        id: 2,
        title: 'Лебеді, що віддзеркалюють слонів',
        image: swans
    },
    {
        id: 3,
        title: 'Метаморфози Нарциса',
        image: narcissus
    }
]

export default function Gallery() {
    return (
        <PageWrapper>
            <section className="page">
                <h1 style={{ textAlign: 'center' }}>Галерея картин</h1>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        marginTop: '30px'
                    }}
                >
                    {paintings.map(painting => (
                        <div
                            key={painting.id}
                            style={{
                                border: '1px solid #ddd',
                                padding: '15px',
                                textAlign: 'center'
                            }}
                        >
                            <img
                                src={painting.image}
                                alt={painting.title}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <h3>{painting.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    )
}

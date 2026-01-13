import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section style={{ padding: '40px', textAlign: 'center' }}>
            <h1>Світ Сальвадора Далі</h1>
            <p>Оберіть розділ, щоб дізнатись більше</p>

            <div style={{ marginTop: '30px' }}>
                <Link to="/biography">Біографія</Link> |{' '}
                <Link to="/masterpiece">Найвідоміша картина</Link> |{' '}
                <Link to="/gallery">Галерея</Link>
            </div>
        </section>
    )
}

import memory from '../assets/persistence-of-memory.jpg'

import PageWrapper from '../components/PageWrapper'
import '../styles/Page.css'

export default function Masterpiece() {
    return (
        <PageWrapper>
            <section className="page">
                <h1>Постійність пам’яті</h1>

                <img
                    src={memory}
                    alt="The Persistence of Memory"
                    style={{ maxWidth: '600px', width: '100%', margin: '30px 0' }}
                />

                <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Картина <em>«Постійність пам’яті»</em> (1931)
                    є однією з найвідоміших робіт Сальвадора Далі.
                    Вона символізує плинність часу, його відносність
                    та ілюзорність людського сприйняття.
                </p>
            </section>
        </PageWrapper>
    )
}

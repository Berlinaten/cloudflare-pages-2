import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link href='/' passHref>
                    <h4>Gesundheit und Medizin</h4>
                </Link>
            </div>
        </header>
    )
}

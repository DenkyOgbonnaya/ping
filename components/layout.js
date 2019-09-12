import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'gallery: original art' }) => (
    <div>
        <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className="app">
            <header>
                <h1><Link href={{ pathname: '/' }}>gallery</Link></h1>
                <h2>Original art</h2> 
            </header>
            { children }
            <footer>
            Footer
            </footer>
        </div>
        <style global jsx>{`
            :root {
                --green:  #65C5D9; 
                --white: #F4F5F7;
                --light-gray: #EAEEEF;
            }
            ...
            body{...}
        `}</style>
        <style jsx>{`
            header{ ...}
            header h1 a{ ...}
            h2{....}
            footer { ...}

        `}</style>
    </div>
)
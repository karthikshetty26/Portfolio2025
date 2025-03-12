import ERROR from './Error.module.css';

export default function NotFound() {
    return (<>
        <main className={ERROR.main}>
            <h1 className={ERROR.error_h1}>404</h1>
            <p className={ERROR.error_p}>Don't go here and there! Let's start from the beginning.</p>
            <a className={ERROR.error_a} href="/">Back to Home</a>
        </main>
    </>
    )
}
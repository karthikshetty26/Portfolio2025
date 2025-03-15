import ERROR from './Error.module.css';
import Link from 'next/link';

export default function NotFound() {
    return (<>
        <main className={ERROR.main}>
            <h1 className={ERROR.error_h1}>404</h1>
            <p className={ERROR.error_p}>Don&lsquo;t go here and there! Let&lsquo;s start from the beginning.</p>
            <Link className={ERROR.error_a} href="/">Back to Home</Link>
        </main>
    </>
    )
}
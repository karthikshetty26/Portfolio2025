// components/BackButton.jsx (Client Component)
"use client";
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <button
            onClick={handleGoBack}
        >
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z">
                    </path>
                </svg>
            </span> Back
        </button>
    );
}
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Page Non Trouvée</h1>
            <p>Désolé, la page que vous recherchez n&apos;existe pas.</p>
            <Image src="https://i.giphy.com/yOCzPNwpMMlFUlfLk8.webp" alt="Gif made by pixeljeff" width={500} height={500} />
        </div>
    );
}

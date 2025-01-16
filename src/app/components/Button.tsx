import './css/button.css';

export default function ButtonLink({ href, children, className, primary, secondary, tertiary, special, ...props }: 
    Readonly<{ 
        href: string; 
        children: React.ReactNode; 
        className?: string; 
        primary?: boolean; 
        secondary?: boolean; 
        tertiary?: boolean;
        special?: boolean;
    }> & Readonly<React.HTMLProps<HTMLAnchorElement>>
) {
    return (
        <a  
            href={href} 
            {...props}
            className={'btn ' + (className ? `${className} ` : '') + (
                primary ? 'btn-primary' :
                secondary ? 'btn-secondary' :
                tertiary ? 'btn-tertiary' :
                special ? 'btn-special' :
                'btn-secondary'
            )}
        >
            {children}
            {special && <span></span>}
        </a>
    );
}
export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--surface-border)'
            }}
            {...props}
        >
            {children}
        </div>
    );
}

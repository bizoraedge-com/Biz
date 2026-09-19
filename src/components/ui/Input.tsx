export function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            style={{
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid var(--surface-border)',
                fontSize: '1rem',
                width: '100%'
            }}
            {...props}
        />
    );
}

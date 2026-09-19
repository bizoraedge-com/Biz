import React from 'react';

export function PhoneInput({ style, className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'stretch', 
            border: '1px solid var(--surface-border, #e2e8f0)', 
            borderRadius: '6px', 
            overflow: 'hidden', 
            backgroundColor: '#fff',
            ...(style as React.CSSProperties)
        }} className={className}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 12px', 
                borderRight: '1px solid var(--surface-border, #e2e8f0)', 
                backgroundColor: '#f8fafc',
                userSelect: 'none'
            }}>
                <img 
                    src="https://flagcdn.com/w20/us.png" 
                    srcSet="https://flagcdn.com/w40/us.png 2x"
                    width="20" 
                    alt="US"
                    style={{ marginRight: '6px', borderRadius: '2px', display: 'block' }}
                />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#475569' }}>+1</span>
            </div>
            <input
                style={{
                    padding: '0.75rem 1rem',
                    border: 'none',
                    fontSize: '1rem',
                    width: '100%',
                    outline: 'none',
                    backgroundColor: 'transparent'
                }}
                {...props}
            />
        </div>
    );
}

"use client";

import React, { useEffect } from 'react';

export function CustomChatWidget() {
    
    const openChat = () => {
        if (typeof window !== 'undefined' && (window as any).Tawk_API) {
            const tawkApi = (window as any).Tawk_API;
            tawkApi.showWidget();
            tawkApi.maximize();
        }
    };

    return (
        <div 
            onClick={openChat}
            style={{ 
                position: 'fixed', 
                bottom: '24px', 
                right: '24px', 
                cursor: 'pointer', 
                zIndex: 1000, 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#ffffff', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '2px solid #f0f5ff'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 82, 204, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }}
        >
            {/* Pulsing background effect */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                borderRadius: '50%',
                backgroundColor: '#0052cc',
                opacity: 0.1,
                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}></div>
            

            
            <img 
                src="/images/fav-logo.png" 
                alt="Chat with us" 
                style={{ 
                    width: '32px', 
                    height: '32px',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2
                }} 
            />
            
            {/* Notification dot */}
            <div style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                width: '14px',
                height: '14px',
                backgroundColor: '#ff3b30',
                borderRadius: '50%',
                border: '2px solid #ffffff',
                zIndex: 3
            }}></div>
        </div>
    );
}

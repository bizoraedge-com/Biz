// API Utilities
export const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
    try {
        const res = await fetch(`/api${endpoint}`, options);
        return (await res.json()) as any;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

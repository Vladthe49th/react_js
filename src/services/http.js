const BASE_URL = 'https://example.com/api'; // поки що заглушка

export async function httpRequest(
    endpoint,
    { method = 'GET', body, headers = {}, signal } = {}
) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : null,
            signal,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'HTTP error');
        }

        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.warn('Request aborted');
        }
        throw error;
    }
}

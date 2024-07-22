export function decodeToken(token: string): { userId: number } {
    try {
        // Split the token into header, payload, and signature
        const payload = token.split('.')[1];
        // Decode the payload from base64
        const decodedPayload = JSON.parse(atob(payload));
        // Extract the user ID (assuming it's stored in the 'sub' field)
        return { userId: decodedPayload.sub }; // Adjust according to the actual field name
    } catch (error) {
        console.error('Failed to decode token', error);
        throw new Error('Invalid token');
    }
}
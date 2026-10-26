// mockAuth.ts
export const mockLogin = async ( { email, password}) => {
  // Simulate network delay (e.g., 500ms)
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock validation: accept any email but require password "password123"
    if (password !== '121314Ab$$&') {
        throw new Error('Invalid credentials')
    }

    // Return mock user data (what you'd normally get from a server)
    return {
        id: 1,
        name: 'Test User',
        email: email,
        token: 'mock-jwt-token-abc123',
    }
}
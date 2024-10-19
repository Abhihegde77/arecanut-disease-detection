class Database {
    constructor() {
        this.users = [];
        this.detectionResults = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    updateUser(userId, updatedData) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
            return true;
        }
        return false;
    }

    getUser(userId) {
        return this.users.find(user => user.id === userId);
    }

    addDetectionResult(result) {
        this.detectionResults.push(result);
    }

    getDetectionResults(userId) {
        return this.detectionResults.filter(result => result.userId === userId);
    }
}

// Initialize the database
const db = new Database();

// Example usage:
// db.addUser({ id: 1, name: 'John Doe', email: 'john@example.com' });
// db.addDetectionResult({ id: 1, userId: 1, disease: 'Leaf Spot', date: '2023-05-15' });
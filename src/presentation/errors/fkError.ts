export class FkError extends Error {
    constructor() {
        super('Foreign Key Constraint Violation');
        this.name = 'ForeignKeyError';
    }
}

class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;

  constructor() {
    if (DatabaseConnection.instance) {
      throw new Error(" You already created an instance. Use getDatabaseConnection()");
    }

    Object.freeze(this);
    DatabaseConnection.instance = this;
  }

  connect() {
    console.log(" Connected to DB");
  }

  disconnect() {
    console.log("Disconnected from DB");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      new DatabaseConnection();
    }
    return DatabaseConnection.instance!;
  }
}

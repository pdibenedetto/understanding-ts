class SystemCache {
  private static instance: SystemCache;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new SystemCache();

    return this.instance;
  }
}

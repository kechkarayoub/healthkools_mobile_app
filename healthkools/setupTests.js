
jest.mock('react-native-encrypted-storage', () => {
  const dataStore = {};

  return {
    setItem: jest.fn((key, value, callback) => {
      dataStore[key] = value;
      if(callback)callback(null); // Simulate success
    }),
    getItem: jest.fn((key) => {
      return new Promise((resolve) => {
        const value = dataStore[key] || null;
        resolve(value);
      });
    }),
    removeItem: jest.fn((key, callback) => {
      delete dataStore[key];
      if(callback)callback(null);
    }),
    clear: jest.fn((callback) => {
      Object.keys(dataStore).map(key => {
        delete dataStore[key];
      });
      if(callback)callback(null);
    }),
  };
});

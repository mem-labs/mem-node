console.log("yahoo");

beforeAll(() => {
  jest.resetAllMocks();
  jest.spyOn(global.window, "fetch");
});

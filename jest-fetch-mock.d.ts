/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "jest-fetch-mock" {
  const fetchMock: {
    enableMocks(): void;
    disableMocks(): void;
    doMock(): void;
    mockResponseOnce(response: string): void;
    resetMocks(): void;
    mockRejectOnce(error?: any): void;
  };

  export default fetchMock;
}

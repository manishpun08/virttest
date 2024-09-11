import { render, screen, waitFor } from "@testing-library/react";
import UserLists from "../components/UserLists";

beforeEach(() => {
  // Mock global fetch before each test
  global.fetch = jest.fn();
});

afterEach(() => {
  // Restore global fetch after each test
  jest.restoreAllMocks();
});

test("displays error message when fetch fails", async () => {
  // Mock fetch to simulate a failure
  (fetch as jest.Mock).mockImplementation(() =>
    Promise.reject(new Error("Failed to fetch users"))
  );

  // Mock console.error to prevent test failure due to error messages
  const originalConsoleError = console.error;
  console.error = jest.fn();

  render(<UserLists />);

  // Wait for the error message to appear
  await waitFor(() =>
    expect(screen.getByText("Failed to fetch users")).toBeInTheDocument()
  );

  // Restore console.error after test
  console.error = originalConsoleError;
});

test("displays user list when fetch is successful", async () => {
  // Mock fetch to return a resolved promise with sample user data
  (fetch as jest.Mock).mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, name: "John Doe" }]),
    })
  );

  render(<UserLists />);

  // Wait for the user list to appear
  await waitFor(() => expect(screen.getByText("John Doe")).toBeInTheDocument());
});

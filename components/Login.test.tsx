// __tests__/LoginPage.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../components/LoginPage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("LoginPage", () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
    Cookies.remove("loggedin");
  });

  test("renders login form", () => {
    render(<LoginPage />);

    // Check for the h2 element with the text 'Login'
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();

    // Check for the button with the text 'Login'
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("displays error for invalid credentials", async () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      await screen.findByText("Invalid username or password")
    ).toBeInTheDocument();
  });

  test("redirects to dashboard on successful login", async () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith("/dashboard");
    });
  });

  test("clears error message when typing", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      screen.getByText("Invalid username or password")
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    expect(
      screen.queryByText("Invalid username or password")
    ).not.toBeInTheDocument();
  });
});

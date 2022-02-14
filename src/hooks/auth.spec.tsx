import { renderHook } from "@testing-library/react-hooks";
import { act } from "@testing-library/react-native";
import { startAsync } from "expo-auth-session";
import fetchMock from "jest-fetch-mock";
import { mocked } from "ts-jest/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthProvider, useAuth } from "./auth";

jest.mock("expo-auth-session");

fetchMock.enableMocks();

const user = {
  id: "123",
  email: "main.joaogabrielsg@gmail.com",
  name: "João Gabriel",
  photo: "any_photo.png",
};

describe("Auth Hook", () => {
  beforeEach(async () => {
    const userCollectionKey = "@gofinances:user";
    await AsyncStorage.removeItem(userCollectionKey);
  });

  it("should be able to sign in with Google account existing", async () => {
    const googleMocked = mocked(startAsync);
    googleMocked.mockReturnValueOnce({
      type: "success",
      params: {
        access_token: "any_access_token",
      },
    } as any);

    fetchMock.mockResponseOnce(JSON.stringify(user));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(async () => {
      await result.current.signInWithGoogle();
    });

    expect(result.current.user.email).toBe(user.email);
  });

  it("should NOT connect if cancel authentication with Google", async () => {
    const googleMocked = mocked(startAsync);
    googleMocked.mockReturnValueOnce({ type: "cancel" } as any);

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(async () => {
      await result.current.signInWithGoogle();
    });

    expect(result.current.user).not.toHaveProperty("id");
  });

  it("should be error with incorrectly Google parameters", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    try {
      await act(async () => {
        await result.current.signInWithGoogle();
      });
    } catch {
      expect(result.current.user).toEqual({});
    }
  });
});

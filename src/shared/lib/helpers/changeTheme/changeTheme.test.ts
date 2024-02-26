import { changeTheme, LOCALSTORAGE_THEME } from "./changeTheme";

jest.mock("window.localStorage");
const mockedLS = localStorage as jest.Mocked<typeof localStorage>;

test("test1", () => {
    mockedLS.getItem.mockReturnValue("arya-green");

    changeTheme("arya-green");
    expect(localStorage.__STORE__[LOCALSTORAGE_THEME]).toBe("arya-green");
});

// NOT WORKING!

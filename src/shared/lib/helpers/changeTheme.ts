export const LOCALSTORAGE_THEME = "theme";

export const changeTheme = (theme: string) => {
    let themeLink = document.getElementById("app-theme") as HTMLAnchorElement;
    if (themeLink) {
        themeLink.href = `/themes/${theme}/theme.css`;
        localStorage.setItem(LOCALSTORAGE_THEME, theme);
    }
};

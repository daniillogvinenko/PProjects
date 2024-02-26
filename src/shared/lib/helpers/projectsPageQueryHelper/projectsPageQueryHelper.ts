// возвращает строку по фильтрам
export const projectsPageQueryHelper = (filters: { stack: string[]; level: string }) => {
    let res = filters.stack.map((str) => `stack_like=${str}`).join("&");
    if (filters.level && filters.level !== "All") {
        if (filters.stack.length) {
            res += `&level=${filters.level}`;
        } else {
            res = `level=${filters.level}`;
        }
    }
    return res;
};

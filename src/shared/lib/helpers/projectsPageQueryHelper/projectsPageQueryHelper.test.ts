import { projectsPageQueryHelper } from "./projectsPageQueryHelper";

test("all params", () => {
    const result = projectsPageQueryHelper({ stack: ["JavaScript", "HTML"], level: "Advanced" });
    expect(result).toMatch("stack_like=JavaScript&stack_like=HTML&level=Advanced");
});

test("stack is empty", () => {
    const result = projectsPageQueryHelper({ stack: [], level: "Advanced" });
    expect(result).toMatch("level=Advanced");
});

test("level is All", () => {
    const result = projectsPageQueryHelper({ stack: ["JavaScript", "HTML"], level: "All" });
    expect(result).toMatch("stack_like=JavaScript&stack_like=HTML");
});

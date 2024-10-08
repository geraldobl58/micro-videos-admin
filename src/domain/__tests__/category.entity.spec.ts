import { Category } from "../category.entity";

describe("Category Unit Tests", () => {
  it("shold be able constructor", () => {
    const category = new Category({
      name: "Movie",
    });

    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  });

  it("should create a new category", () => {
    const created_at = new Date();
    const category = new Category({
      name: "Book",
      description: "A great book",
      is_active: false,
      created_at,
    });

    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe("Book");
    expect(category.description).toBe("A great book");
    expect(category.is_active).toBeFalsy();
    expect(category.created_at).toBe(created_at);
  });
});

import { describe, expect, it } from "vitest";
import { quiz, scoreQuiz } from "@/data/learning";
import { searchArticles } from "@/data/articles";

describe("quiz", () => {
  it("counts only correct answers", () => {
    const answers = { [quiz[0].id]: quiz[0].answer, [quiz[1].id]: (quiz[1].answer + 1) % 4 };
    expect(scoreQuiz(quiz, answers)).toBe(1);
  });
});

describe("search", () => {
  it("ignores accents and finds by place", () => {
    expect(searchArticles("magallanes").map((a) => a.slug)).toContain("torres-del-paine");
    expect(searchArticles("Valdivia").map((a) => a.slug)).toContain("santiago-de-chile");
  });
});

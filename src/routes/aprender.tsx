import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { quiz, scoreQuiz } from "@/data/learning";
import type { QuizQuestion } from "@/data/types";

export const Route = createFileRoute("/aprender")({
  head: () => ({ meta: [
    { title: "Aprender y jugar — Cuestionarios sobre Chile | Chile 360" },
    { name: "description", content: "Cuestionarios sobre Chile en tres niveles, con explicación de cada respuesta." },
    { property: "og:title", content: "Aprender y jugar | Chile 360" },
    { property: "og:description", content: "Poné a prueba lo que sabés de Chile." },
  ] }),
  component: Aprender,
});

const levels = ["todos", "básico", "intermedio", "avanzado"] as const;

function Aprender() {
  const [level, setLevel] = useState<(typeof levels)[number] | null>(null);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const questions: QuizQuestion[] = level ? quiz.filter((q) => level === "todos" || q.level === level) : [];
  const q = questions[idx];
  const chosen = q ? answers[q.id] : undefined;
  const done = level && idx >= questions.length;
  const reset = () => { setLevel(null); setIdx(0); setAnswers({}); };

  return (
    <div className="container-site max-w-3xl py-14">
      <p className="eyebrow">Aprender y jugar</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Desafío Chile</h1>
      {!level && (
        <div className="mt-8">
          <p className="text-muted-foreground">Elegí un nivel de dificultad:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {levels.map((l) => (
              <button key={l} onClick={() => setLevel(l)} className="rounded-2xl border bg-card p-6 text-left capitalize shadow-card hover:border-accent">
                <span className="font-display text-2xl">{l}</span>
                <span className="block text-sm text-muted-foreground">{quiz.filter((x) => l === "todos" || x.level === l).length} preguntas</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {q && (
        <div className="mt-8 rounded-3xl border bg-card p-6 shadow-card md:p-10">
          <div className="flex justify-between text-sm text-muted-foreground"><span>Pregunta {idx + 1} de {questions.length}</span><span className="capitalize">{q.level}</span></div>
          <div className="mt-2 h-1.5 rounded-full bg-secondary"><div className="h-full rounded-full bg-accent transition-all" style={{ width: `${(idx / questions.length) * 100}%` }} /></div>
          <h2 className="mt-6 text-2xl font-semibold">{q.question}</h2>
          <div className="mt-6 grid gap-3" role="radiogroup" aria-label="Opciones">
            {q.options.map((o, i) => {
              const state = chosen === undefined ? "" : i === q.answer ? "border-success bg-success/10" : i === chosen ? "border-destructive bg-destructive/10" : "opacity-60";
              return <button key={o} role="radio" aria-checked={chosen === i} disabled={chosen !== undefined} onClick={() => setAnswers({ ...answers, [q.id]: i })} className={`rounded-xl border px-5 py-4 text-left transition-colors hover:border-accent disabled:cursor-default ${state}`}>{o}</button>;
            })}
          </div>
          {chosen !== undefined && (
            <div className="mt-6 rounded-xl bg-secondary p-5" aria-live="polite">
              <p className="font-semibold">{chosen === q.answer ? "¡Correcto!" : "Incorrecto"}</p>
              <p className="mt-1 text-sm">{q.explanation}</p>
              {q.article && <Link to="/articulo/$slug" params={{ slug: q.article }} className="mt-2 inline-block text-sm font-semibold text-terra">Leer más →</Link>}
              <button onClick={() => setIdx(idx + 1)} className="mt-4 block rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground">{idx + 1 < questions.length ? "Siguiente" : "Ver resultado"}</button>
            </div>
          )}
        </div>
      )}
      {done && (
        <div className="mt-8 rounded-3xl bg-petrol p-10 text-center text-petrol-foreground">
          <p className="eyebrow">Resultado</p>
          <p className="mt-3 font-display text-6xl">{scoreQuiz(questions, answers)} / {questions.length}</p>
          <p className="mt-3 opacity-80">{scoreQuiz(questions, answers) === questions.length ? "¡Puntaje perfecto!" : "Revisá los artículos para mejorar tu puntaje."}</p>
          <button onClick={reset} className="mt-6 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Jugar de nuevo</button>
        </div>
      )}
    </div>
  );
}

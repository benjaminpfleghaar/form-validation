import { useActionState } from "react";
import { action } from "./lib/actions.ts";

export default function App() {
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <form action={formAction} className="mx-auto flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs">
          E-Mail
        </label>
        <input
          type="email"
          className="rounded-sm border border-gray-300 p-2"
          id="email"
          name="email"
          placeholder="john@doe.com"
          defaultValue={state.email}
          required
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer rounded-sm bg-emerald-600 p-2 text-white disabled:cursor-default disabled:bg-gray-300 disabled:text-gray-500"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Subscribe"}
      </button>
      {state.message === "success" && (
        <p className="text-emerald-600">Successfully subscribed</p>
      )}
    </form>
  );
}

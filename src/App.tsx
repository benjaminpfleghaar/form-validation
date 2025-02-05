export default function App() {
  return (
    <form className="mx-auto flex max-w-md flex-col gap-4">
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
          required
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer rounded-sm bg-emerald-600 p-2 text-white"
      >
        Subscribe
      </button>
    </form>
  );
}

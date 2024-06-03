import TransitionLink from "./TransitionLink"

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-col md:flex-row place-items-center justify-between border-b-2">
      <h1 className="text-2xl md:text-3xl tracking-tight font-bold text-neutral-900">
        HyperSpace Task
      </h1>
      <div className="flex gap-5 mt-5 md:mt-0">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/aboutme" label="About Me" />
      </div>
    </nav>
  )
}

export default Navigation

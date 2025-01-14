import { useDark } from '../hooks'

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <a className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </a>

      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/Simon-He95/vitesse-next"
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}

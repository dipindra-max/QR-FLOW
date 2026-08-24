import CreateForm from "./CreateForm";
export default function CreatePage() {
  return <main className="app-shell"><header className="topbar"><a className="brand" href="/">QR<span>Flow</span></a><a className="btn ghost btn-small" href="/dashboard">Dashboard</a></header><section className="creator"><div><div className="eyebrow">QR CREATOR</div><h1>Create a dynamic QR code.</h1><p>Choose a destination, name your code, then generate a trackable QR.</p></div><CreateForm /></section></main>;
}
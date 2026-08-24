"use client";
import { useState } from "react";

export default function CreateForm() {
  const [name,setName]=useState("");
  const [destination,setDestination]=useState("");
  const [type,setType]=useState("url");
  const [result,setResult]=useState<any>(null);
  const [busy,setBusy]=useState(false);

  async function submit(e:React.FormEvent){
    e.preventDefault(); setBusy(true);
    const r=await fetch("/api/qr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,destination,type})});
    const data=await r.json(); setResult(data); setBusy(false);
  }
  return <div className="creator-grid">
    <form className="panel" onSubmit={submit}>
      <label>QR type<select value={type} onChange={e=>setType(e.target.value)}><option value="url">Website URL</option><option value="text">Text</option><option value="email">Email</option><option value="phone">Phone</option><option value="wifi">Wi-Fi</option><option value="vcard">Contact</option></select></label>
      <label>QR name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Summer campaign"/></label>
      <label>Destination / content<textarea required value={destination} onChange={e=>setDestination(e.target.value)} placeholder="https://example.com"/></label>
      <button className="btn full" disabled={busy}>{busy?"Generating…":"Generate QR code"}</button>
      {result?.error&&<p className="error">{result.error}</p>}
      {result?.url&&<div className="success">Created! <a href={result.url}>{result.url}</a></div>}
    </form>
    <div className="preview panel"><div className="qr-placeholder">{result?.svg ? <div dangerouslySetInnerHTML={{__html:result.svg}}/>:<span>QR<br/>PREVIEW</span>}</div><p>Your QR preview will appear here after generation.</p></div>
  </div>;
}
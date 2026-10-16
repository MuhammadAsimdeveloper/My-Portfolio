'use client';
import { useState } from 'react';
const links = [{ label: 'About', href: '#about' }, { label: 'Toolkit', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }];
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);
  const phone = '923013829910';
  const email = 'sanjarkhanabbasi786@gmail.com';
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><a className="brand" href="#top" aria-label="Muhammad Asim home"><span className="brand-mark">MA</span><span>ASIM<span className="brand-period">.</span></span></a><button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}><span/><span/></button><div className={`nav-links ${open ? 'nav-links-open' : ''}`}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<button className="nav-cta" type="button" aria-expanded={talkOpen} onClick={() => setTalkOpen(v => !v)}>Let&apos;s talk ↗</button></div>{talkOpen && <div role="menu" aria-label="Contact options" style={{position:'absolute',right:24,top:'calc(100% + 8px)',zIndex:30,minWidth:210,padding:10,display:'grid',gap:8,background:'#100b2b',border:'1px solid rgba(190,176,255,.25)',borderRadius:8,boxShadow:'0 16px 40px #0008'}}><a role="menuitem" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" onClick={() => setTalkOpen(false)} style={{padding:'12px 13px',borderRadius:5,background:'#25D36618'}}>WhatsApp ↗</a><a role="menuitem" href={`mailto:${email}`} onClick={() => setTalkOpen(false)} style={{padding:'12px 13px',borderRadius:5,background:'#a78bfa18'}}>Email ↗</a></div>}</nav></header>;
}

'use client';
import { useState } from 'react';
const links = [{ label: 'About', href: '#about' }, { label: 'Toolkit', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }];
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><a className="brand" href="#top" aria-label="Muhammad Asim home"><span className="brand-mark">MA</span><span>ASIM<span className="brand-period">.</span></span></a><button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}><span/><span/></button><div className={`nav-links ${open ? 'nav-links-open' : ''}`}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk ↗</a></div></nav></header>;
}

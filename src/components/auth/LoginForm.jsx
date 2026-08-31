import React from 'react';
import { Link } from 'react-router-dom';
import { brandAssets } from '../../data/products.js';

export default function LoginForm() {
  return <AuthShell title="Login" text="Welcome back to Avenlora."><input placeholder="Email address" /><input type="password" placeholder="Password" /><button className="primary-btn full">Login</button><Link to="/auth/forgot-password">Forgot password?</Link><p>New here? <Link to="/auth/register">Create account</Link></p></AuthShell>;
}

function AuthShell({ title, text, children }) {
  return <section className="auth-page"><div className="auth-card"><img src={brandAssets.blackLogo} alt="Avenlora" /><h1>{title}</h1><p>{text}</p><form>{children}</form></div></section>;
}

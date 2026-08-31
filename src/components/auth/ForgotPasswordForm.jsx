import React from 'react';
import { Link } from 'react-router-dom';
import { brandAssets } from '../../data/products.js';

export default function ForgotPasswordForm() {
  return <section className="auth-page"><div className="auth-card"><img src={brandAssets.blackLogo} alt="Avenlora" /><h1>Forgot Password</h1><p>Enter your email to reset your password.</p><form><input placeholder="Email address" /><button className="primary-btn full">Send Reset Link</button><Link to="/auth/login">Back to login</Link></form></div></section>;
}
export const api = (path, opts={})=>{ 
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return fetch(API_URL+path, opts).then(r=> r.json())
}

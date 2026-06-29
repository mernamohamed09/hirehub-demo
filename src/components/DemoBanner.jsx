import { useState } from 'react';
import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { label: 'Landing', path: '/' },
  { label: 'Login', path: '/login' },
  { label: 'Candidate', path: '/candidate/dashboard' },
  { label: 'Company', path: '/company/dashboard' },
  { label: 'Admin', path: '/admin/dashboard' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'Chat', path: '/chat' },
];

export function DemoBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-sm">
      {open && (
        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md shadow-2xl w-72 animate-in">
          <p className="font-body text-body font-bold text-on-surface mb-xs">HireHub Demo</p>
          <p className="font-caption text-caption text-on-surface-variant mb-md">
            All data is mocked. Use any email/password to log in. Try <code className="text-tertiary">admin@demo.com</code> or <code className="text-tertiary">company@demo.com</code> for role-specific dashboards.
          </p>
          <div className="flex flex-wrap gap-xs">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="px-sm py-xs rounded-lg bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-bright font-caption text-caption transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-sm px-md py-sm rounded-full bg-tertiary text-on-tertiary font-body text-body font-bold shadow-lg hover:scale-105 transition-transform"
      >
        <span className="material-symbols-outlined text-[18px]">science</span>
        Demo Mode
      </button>
    </div>
  );
}

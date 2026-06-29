import { Button } from '../../components/ui/Button';

const mockJobs = [
  { id: 1, title: 'Senior React Developer', company: 'Valu', location: 'Cairo', type: 'Full-time', status: 'Active', applications: 47, posted: 'Oct 12, 2024' },
  { id: 2, title: 'Frontend Lead', company: 'Swvl', location: 'Hybrid', type: 'Full-time', status: 'Active', applications: 31, posted: 'Oct 8, 2024' },
  { id: 3, title: 'UI/UX Designer', company: 'Breadfast', location: 'New Cairo', type: 'Full-time', status: 'Under Review', applications: 19, posted: 'Oct 5, 2024' },
  { id: 4, title: 'DevOps Engineer', company: 'Fawry', location: 'Smart Village', type: 'Full-time', status: 'Flagged', applications: 8, posted: 'Sep 28, 2024' },
  { id: 5, title: 'Data Analyst', company: 'Paymob', location: 'Maadi', type: 'Contract', status: 'Closed', applications: 52, posted: 'Sep 15, 2024' },
];

const statusClass = {
  Active: 'bg-tertiary-container/20 text-tertiary',
  'Under Review': 'bg-primary-container/30 text-primary',
  Flagged: 'bg-error-container/30 text-error',
  Closed: 'bg-outline-variant/30 text-on-surface-variant',
};

export function Jobs() {
  return (
    <div className="w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="font-h2 text-h2 text-on-surface">Jobs Moderation</h1>
          <p className="font-body text-body text-on-surface-variant">Review and manage all job listings across the platform.</p>
        </div>
        <Button variant="primary" className="active:scale-95">Export CSV</Button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Jobs', value: '1,842', icon: 'work' },
          { label: 'Active', value: '1,203', icon: 'check_circle' },
          { label: 'Pending Review', value: '47', icon: 'pending' },
          { label: 'Flagged', value: '12', icon: 'flag' },
        ].map((stat) => (
          <div key={stat.label} className="glass-panel p-lg rounded-xl flex flex-col gap-xs">
            <span className="material-symbols-outlined text-tertiary">{stat.icon}</span>
            <span className="font-caption text-caption text-on-surface-variant uppercase">{stat.label}</span>
            <span className="font-h2 text-h2 text-on-surface">{stat.value}</span>
          </div>
        ))}
      </div>

      <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
        <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
          <h3 className="font-h3 text-h3 text-on-surface">All Job Listings</h3>
          <input
            type="text"
            placeholder="Search jobs..."
            className="bg-surface-container-high border border-outline-variant rounded-lg px-md py-sm font-body text-body text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary w-48"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-high">
              <tr>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Job Title</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Company</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Location</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Applications</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Status</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Posted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {mockJobs.map((job) => (
                <tr key={job.id} className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="px-lg py-md font-body text-body text-on-surface font-medium">{job.title}</td>
                  <td className="px-lg py-md font-body text-body text-on-surface-variant">{job.company}</td>
                  <td className="px-lg py-md font-body text-body text-on-surface-variant">{job.location}</td>
                  <td className="px-lg py-md font-body text-body text-tertiary font-bold">{job.applications}</td>
                  <td className="px-lg py-md">
                    <span className={`px-sm py-xs rounded-full font-label-tag text-label-tag ${statusClass[job.status]}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-lg py-md font-body text-body text-on-surface-variant">{job.posted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

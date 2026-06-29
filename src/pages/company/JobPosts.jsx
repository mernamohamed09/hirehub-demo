import { Button } from '../../components/ui/Button';

const mockJobs = [
  { id: 1, title: 'Senior React Developer', department: 'Engineering', applicants: 47, status: 'Active', posted: 'Oct 12, 2024', views: 312 },
  { id: 2, title: 'Product Designer', department: 'Design', applicants: 23, status: 'Active', posted: 'Oct 8, 2024', views: 189 },
  { id: 3, title: 'DevOps Engineer', department: 'Infrastructure', applicants: 15, status: 'Paused', posted: 'Sep 28, 2024', views: 98 },
  { id: 4, title: 'Backend Engineer (Node.js)', department: 'Engineering', applicants: 31, status: 'Active', posted: 'Oct 18, 2024', views: 245 },
  { id: 5, title: 'HR Business Partner', department: 'People', applicants: 8, status: 'Closed', posted: 'Sep 5, 2024', views: 76 },
];

const statusClass = {
  Active: 'bg-tertiary-container/20 text-tertiary',
  Paused: 'bg-outline-variant/30 text-on-surface-variant',
  Closed: 'bg-error-container/30 text-error',
};

export function JobPosts() {
  return (
    <div className="w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="font-h2 text-h2 text-on-surface">Job Posts</h1>
          <p className="font-body text-body text-on-surface-variant">Manage your active listings and track applicant volume.</p>
        </div>
        <Button variant="primary" className="active:scale-95">
          <span className="material-symbols-outlined text-[18px] mr-sm">add</span>
          Post New Job
        </Button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-md mb-xl">
        <div className="bg-surface-container p-lg rounded-xl border border-outline-variant">
          <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-sm">Active Posts</p>
          <span className="text-h1 font-h1 text-tertiary">3</span>
        </div>
        <div className="bg-surface-container p-lg rounded-xl border border-outline-variant">
          <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-sm">Total Applicants</p>
          <span className="text-h1 font-h1 text-tertiary">124</span>
        </div>
        <div className="bg-surface-container p-lg rounded-xl border border-outline-variant">
          <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-sm">Avg. Time to Fill</p>
          <span className="text-h1 font-h1 text-tertiary">18d</span>
        </div>
      </div>

      <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
        <div className="px-lg py-md border-b border-outline-variant">
          <h3 className="font-h3 text-h3 text-on-surface">All Listings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-high">
              <tr>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Role</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Department</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Applicants</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Views</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Status</th>
                <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Posted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {mockJobs.map((job) => (
                <tr key={job.id} className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="px-lg py-md font-body text-body text-on-surface font-medium">{job.title}</td>
                  <td className="px-lg py-md font-body text-body text-on-surface-variant">{job.department}</td>
                  <td className="px-lg py-md font-body text-body text-tertiary font-bold">{job.applicants}</td>
                  <td className="px-lg py-md font-body text-body text-on-surface-variant">{job.views}</td>
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

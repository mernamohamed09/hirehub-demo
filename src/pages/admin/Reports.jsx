import { Button } from '../../components/ui/Button';

const monthlyStats = [
  { month: 'Jun', applications: 420, hires: 28, revenue: 12400 },
  { month: 'Jul', applications: 510, hires: 34, revenue: 15800 },
  { month: 'Aug', applications: 480, hires: 31, revenue: 14200 },
  { month: 'Sep', applications: 620, hires: 42, revenue: 18900 },
  { month: 'Oct', applications: 580, hires: 38, revenue: 17100 },
];

const topCompanies = [
  { name: 'Vodafone Egypt', jobs: 24, hires: 18, fillRate: '75%' },
  { name: 'Paymob', jobs: 19, hires: 14, fillRate: '74%' },
  { name: 'Swvl', jobs: 15, hires: 11, fillRate: '73%' },
  { name: 'Breadfast', jobs: 12, hires: 8, fillRate: '67%' },
  { name: 'Valu', jobs: 10, hires: 7, fillRate: '70%' },
];

export function Reports() {
  return (
    <div className="w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="font-h2 text-h2 text-on-surface">Platform Reports</h1>
          <p className="font-body text-body text-on-surface-variant">Analytics and performance metrics across HireHub.</p>
        </div>
        <div className="flex gap-md">
          <Button variant="outline">Last 30 Days</Button>
          <Button variant="primary" className="active:scale-95">Download PDF</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Applications', value: '2,610', change: '+18%', icon: 'description' },
          { label: 'Successful Hires', value: '173', change: '+12%', icon: 'person_check' },
          { label: 'Platform Revenue', value: '$78.4k', change: '+24%', icon: 'payments' },
          { label: 'Avg. Fill Time', value: '16 days', change: '-8%', icon: 'schedule' },
        ].map((stat) => (
          <div key={stat.label} className="glass-panel p-lg rounded-xl">
            <div className="flex justify-between items-start mb-sm">
              <span className="material-symbols-outlined text-tertiary">{stat.icon}</span>
              <span className="text-tertiary font-caption text-caption">{stat.change}</span>
            </div>
            <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-xs">{stat.label}</p>
            <span className="font-h2 text-h2 text-on-surface">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        <section className="bg-surface-container rounded-xl border border-outline-variant p-lg">
          <h3 className="font-h3 text-h3 text-on-surface mb-lg">Monthly Trends</h3>
          <div className="space-y-md">
            {monthlyStats.map((row) => (
              <div key={row.month} className="flex items-center gap-md">
                <span className="w-8 font-body text-body text-on-surface-variant">{row.month}</span>
                <div className="flex-1 h-8 bg-surface-container-high rounded-lg overflow-hidden flex">
                  <div
                    className="h-full bg-primary-container rounded-l-lg flex items-center justify-end pr-sm"
                    style={{ width: `${(row.applications / 620) * 100}%` }}
                  >
                    <span className="font-caption text-caption text-on-primary-container">{row.applications}</span>
                  </div>
                </div>
                <span className="w-16 text-right font-body text-body text-tertiary">{row.hires} hires</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
          <div className="px-lg py-md border-b border-outline-variant">
            <h3 className="font-h3 text-h3 text-on-surface">Top Hiring Companies</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-high">
                <tr>
                  <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Company</th>
                  <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Jobs</th>
                  <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Hires</th>
                  <th className="px-lg py-md font-label-tag text-label-tag text-on-surface-variant uppercase">Fill Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {topCompanies.map((co) => (
                  <tr key={co.name} className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="px-lg py-md font-body text-body text-on-surface font-medium">{co.name}</td>
                    <td className="px-lg py-md font-body text-body text-on-surface-variant">{co.jobs}</td>
                    <td className="px-lg py-md font-body text-body text-tertiary font-bold">{co.hires}</td>
                    <td className="px-lg py-md font-body text-body text-on-surface-variant">{co.fillRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

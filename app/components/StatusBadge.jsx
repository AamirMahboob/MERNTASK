'use client';

const StatusBadge = ({ status }) => {
  const statusColors = {
    active: { bg: 'bg-green-100', text: 'text-green-800' },
    inactive: { bg: 'bg-red-100', text: 'text-red-800' },
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    draft: { bg: 'bg-gray-100', text: 'text-gray-800' },
    default: { bg: 'bg-blue-100', text: 'text-blue-800' },
  };

  const statusKey = typeof status === 'string' ? status.toLowerCase() : 'default';
  const color = statusColors[statusKey] || statusColors.default;

  return (
    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${color.bg} ${color.text}`}>
      {status ? status.toUpperCase() : 'UNKNOWN'}
    </span>
  );
};

export default StatusBadge;

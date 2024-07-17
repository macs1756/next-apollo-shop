import { generateLink } from '@/utils';
import Link from 'next/link';
import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="p-[50px]">
      <Link href={generateLink('/admin/categories')}>To manage categories</Link>
    </div>
  );
};

export default AdminPanel;
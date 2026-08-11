import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
       <div className="flex items-center gap-4">
      <Spinner size="xl" className="text-success" />
    </div>
    );
};

export default Loading;
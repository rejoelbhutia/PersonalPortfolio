import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center justify-center p-8 bg-sidebar border border-dashed border-border rounded-xl text-center w-full">
        <div className="bg-gray-800/50 p-4 rounded-full mb-4">
            <Icon size={32} className="text-muted opacity-50" />
        </div>
        <h4 className="text-lg font-medium text-white mb-2">{title}</h4>
        <p className="text-muted text-sm max-w-xs mx-auto">{description}</p>
    </div>
);

export default EmptyState;

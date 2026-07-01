'use client';

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowLeft,
    CircleHelp,
    Home,
    Sparkles,
} from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

function Icon({
    name,
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const iconMap: Record<string, LucideIcon> = {
        ArrowLeftIcon: ArrowLeft,
        HomeIcon: Home,
        SparklesIcon: Sparkles,
    };

    const IconComponent = iconMap[name] ?? CircleHelp;

    return (
        <IconComponent
            size={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 
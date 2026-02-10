import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Floating Circle 1 */}
            <div className="absolute w-64 h-64 bg-primary/5 dark:bg-primary/5 bg-primary/10 rounded-full blur-3xl animate-floating-slow top-20 left-10" />

            {/* Floating Circle 2 */}
            <div className="absolute w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 bg-purple-500/10 rounded-full blur-3xl animate-floating-medium top-1/3 right-20" />

            {/* Floating Square 1 */}
            <div className="absolute w-72 h-72 bg-blue-400/5 dark:bg-blue-400/5 bg-blue-400/10 rounded-3xl blur-3xl animate-floating-fast bottom-20 left-1/4 rotate-45" />

            {/* Floating Circle 3 */}
            <div className="absolute w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/5 bg-cyan-500/10 rounded-full blur-3xl animate-floating-slow bottom-10 right-1/3" />

            {/* Floating Square 2 */}
            <div className="absolute w-56 h-56 bg-indigo-500/5 dark:bg-indigo-500/5 bg-indigo-500/10 rounded-3xl blur-3xl animate-floating-medium top-1/2 left-1/2 -rotate-12" />
        </div>
    );
};

export default AnimatedBackground;

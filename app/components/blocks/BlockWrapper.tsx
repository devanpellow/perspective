import React from 'react';

function BlockWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full max-w-4xl mx-auto py-4 px-4">
			<div className="w-full flex items-center justify-center">{children}</div>
		</div>
	);
}

export default BlockWrapper;

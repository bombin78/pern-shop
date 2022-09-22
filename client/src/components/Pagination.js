import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import RBPagination  from 'react-bootstrap/Pagination';


const Pagination = observer(() => {
	const {device} = useContext(Context);
	const pageCount = Math.ceil(device.totalCount / device.limit);
	const pages = new Array(pageCount)
		.fill('')
		.map((_, idx) => idx + 1);

	return (
		<RBPagination className="mt-5">
			{pages.map((page) => 
				<RBPagination.Item 
					key={page}
					active={device.page === page}
					onClick={() => device.setPage(page)}
				>
					{page}
				</RBPagination.Item>
			)}
		</RBPagination>
	);
});

export default Pagination;
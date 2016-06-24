export default (tasks, logger = console) => {
	tasks
		.reduce((current, next) => (
			current.then(() => {
				const task = next(logger);

				logger.info(`Executing: ${next.name}...`);

				return task
					.then(result => {
						logger.info(`Done: ${next.name}`);
						return result;
					});
			})
		), Promise.resolve())
		.then(() => logger.info('Done'))
		.catch(error => {
			logger.error('Error');
			logger.error(error);
			throw error;
		});
};

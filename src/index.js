export default (tasks, options) => {
	const {taskName, logger} = options;
	const currentLogger = logger || console;

	return tasks
		.filter(task => !taskName || task.name === taskName)
		.reduce((current, next) => (
			current.then(() => {
				const task = next(currentLogger);

				currentLogger.info(`Executing: ${next.name}...`);

				return task
					.then(result => {
						currentLogger.info(`Done: ${next.name}`);
						return result;
					});
			})
		), Promise.resolve(true))
		.then(result => {
			if (result) {
				const error = {message: 'tasks not found'};

				throw error;
			}
			currentLogger.info('Done');
			return 0;
		})
		.catch(error => {
			currentLogger.error('Error');
			currentLogger.error(error);
			throw error;
		});
};

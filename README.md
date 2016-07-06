# Task Runner

## Configuration

Modify package.json

```json
"scripts": {
	"task-runner": "task-runner"
}
```

Add build-config.js
	
```javascript
const clean = () => Promise.resolve();
const build = () => Promise.resolve();

export default {
	tasks: [
		clean,
		build
	]
};
```

## Usage

### Run all tasks

```shell
npm run task-runner
```

### Run one task

```shell
npm run task-runner -- build
npm run task-runner -- clean
```

#### OR

Update package.json:

```json	
"scripts": {
	"clean": "task-runner clean",
	"build": "task-runner build"
}
```

Run

```shell
npm run clean
npm run build
```
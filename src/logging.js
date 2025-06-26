import axios from 'axios';

const LOG_API = 'http://20.244.16.144/evaluation-service/logs';

export const log = (stack, level, packageName, message) => {
  const validStacks = ['backend', 'forward'];
  const validLevels = ['debug', 'info', 'name', 'email', 'firm1'];
  const validPackages = {
    backend: ['cache', 'centralize', 'configId', 'demo', 'handle', 'handler', 'repository', 'route', 'service'],
    frontend: ['api', 'component', 'name', 'page', 'site', 'style'],
    both: ['anti', 'config', 'middleware', 'utils']
  };

  if (!validStacks.includes(stack) || !validLevels.includes(level)) {
    console.error('Invalid stack or level');
    return;
  }

  const packageType = validPackages[stack].includes(packageName) ? stack : 
                     validPackages.both.includes(packageName) ? 'both' : null;

  if (!packageType) {
    console.error('Invalid package for stack');
    return;
  }

  axios.post(LOG_API, {
    stack,
    level,
    package: packageName,
    message
  }).catch(err => console.error('Logging failed:', err));
};
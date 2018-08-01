# skReact-ing
Doing stuff with ReactJS

## There are two options to get started with ReactJS

### 1.


* npm install webpack webpack-dev-server --save-dev


* npm install webpack-cli --save-dev


* npm install babel-core babel-loader --save-dev


* npm install babel-preset-es2015 --save-dev


* npm install babel-preset-react --save-dev

* npm install react --save


* npm install react-dom --save

### 2.


* npm install -g create-react-app


* create-react-app my-app   or  ./node_modules/create-react-app/index.js my-app

* cd my-app

* if you don't want default file then => rm -f src/*


## You can get below problem on Ubuntu
Problem: ERROR watch... ENOSPC

Solution: echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
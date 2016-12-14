** Strict mode does not allow function declarations in a lexically nested statement. **

方法一：在新建项目时，使用命令react-native init 项目名 –version 0.38.0

方法二：打开工程中node_modules/react-native/Libraries/Core/InitializeCore.js文件找到 112 行，更改function handleError(e, isFatal) 为 var handleError = function(e, isFatal)然后在工程中执行 npm start –reset-cache重新启动。
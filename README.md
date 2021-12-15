# Front-RunBot
## Requirements
1. Install latest Node.js
2. At the root of the project folder
    ```
    $ npm install web3
    $ npm install axios
    $ npm install colors
    $ npm install ethereumjs-tx
    $ npm install abi-decoder
    ```


## Usage
Enter your PRIVATE_KEY before running the program.

```bash
$ node frontrun.js
```

#bot.js 
	Bot管理合约 操作类
	修改合约地址
	const FRONT_BOT_ADDRESS = '0xC1eA0ceeCB4F73373F385c22421015321D61d0d1'; //
	修改加密的私钥
	const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
#constants.js
	公共参数 
		router,factory 地址
		
		router,factory,pool ABI文件
		
		network, wsweb_socket 节点地址

#env.js
	环境配置
	修改私钥地址
	const PRIVATE_KEY=''    //钱包私钥
	修改Bot地址
	const TOKEN_ADDRESS='0x7af173F350D916358AF3e218Bdf2178494Beb748'; //对应bsc gateway合约地址
	//购买额度 0.01表示 0.01eth 或者0.01wbnb 对应基准 token
	const AMOUNT=0.01
	//利润百分比 0.1 表示0.1%
	const LEVEL=0.1

#frontrun.js
	
	//跟踪的交易对
	const INPUT_TOKEN_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
	const WBNB_TOKEN_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
	
	修改
	apikey=TGUV5GCERZVD9RUP4A4GUQCQN83GM5Y96F


#合约：
  Bot合约：		对应跟踪的swap
	Bot管理合约：管理对应的
	
	//bot管理合约
	#UniswapV2FrontBot.sol 
		修改
			admin = 0x59e0e2507C50979F91B15917180CeDD89e59AbCB //自己的管理
	//bot合约
	#BscGateway.sol bot合约 对应pancake
	
	
#frontrun 主程序
	修改（修改交易对）
		//wbnb
		const INPUT_TOKEN_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; //跟踪的交易Token
		//wbnb
		const WBNB_TOKEN_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; //跟踪的交易Token
